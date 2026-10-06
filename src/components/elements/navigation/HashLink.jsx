import { forwardRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

let activeScrollCleanup = null;

export const scrollToHash = (hash, yOffset = -100) => {
  if (!hash) return;

  // Clean up any previously active scroll observation
  if (activeScrollCleanup) {
    activeScrollCleanup();
    activeScrollCleanup = null;
  }

  if (hash === "home" || hash === "banner") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  let observer = null;
  let pollInterval = null;
  let safetyTimeout = null;
  let allowWheelCancel = false;

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }
    if (safetyTimeout) {
      clearTimeout(safetyTimeout);
      safetyTimeout = null;
    }
    window.removeEventListener("wheel", handleUserScroll);
    window.removeEventListener("touchmove", handleUserScroll);
    if (activeScrollCleanup === cleanup) {
      activeScrollCleanup = null;
    }
  };

  activeScrollCleanup = cleanup;

  const handleUserScroll = (e) => {
    if (!allowWheelCancel) return;
    if (Math.abs(e.deltaY || 0) > 10) {
      cleanup();
    }
  };

  const align = (smooth = true) => {
    const element = document.getElementById(hash);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const currentTop = rect.top;
    const targetTop = -yOffset; // e.g. 100px from top

    // If already aligned within 10px, don't trigger unnecessary scroll animations
    if (Math.abs(currentTop - targetTop) <= 10) {
      return true;
    }

    const y = currentTop + window.pageYOffset + yOffset;
    window.scrollTo({ top: Math.max(0, y), behavior: smooth ? "smooth" : "auto" });
    return true;
  };

  // Only allow user wheel cancellation after 400ms to ignore mouse click / trackpad inertia
  setTimeout(() => {
    allowWheelCancel = true;
  }, 400);

  window.addEventListener("wheel", handleUserScroll, { passive: true });
  window.addEventListener("touchmove", handleUserScroll, { passive: true });

  // Initial attempt: try immediately, or retry if element is not yet in DOM
  let attempts = 0;
  const initInterval = setInterval(() => {
    attempts++;
    const found = align(true);
    if (found || attempts > 20) {
      clearInterval(initInterval);
    }
  }, 50);

  // Monitor DOM / image layout shifts for 3.5 seconds
  if (typeof ResizeObserver !== "undefined" && document.body) {
    observer = new ResizeObserver(() => {
      align(true);
    });
    observer.observe(document.body);
  }

  // Periodic alignment check as backup while images load
  pollInterval = setInterval(() => {
    align(true);
  }, 400);

  // Auto clean up after 3.5 seconds
  safetyTimeout = setTimeout(cleanup, 3500);
};

export const HashLink = forwardRef(
  ({ to, scroll, children, onClick, ...props }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
      }

      if (e.defaultPrevented) return;

      // Check if the target is a hash link
      if (typeof to === "string" && to.includes("#")) {
        const [path, hash] = to.split("#");
        const currentPath = location.pathname;

        e.preventDefault();

        if (path && path !== currentPath) {
          navigate(to);
          setTimeout(() => scrollToHash(hash), 60);
        } else {
          window.history.pushState(null, null, `#${hash}`);
          scrollToHash(hash);
        }
      }
    };

    return (
      <Link ref={ref} to={to} {...props} onClick={handleClick}>
        {children}
      </Link>
    );
  },
);

HashLink.displayName = "HashLink";
