import React, { forwardRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const HashLink = forwardRef(({ to, scroll, children, onClick, ...props }, ref) => {
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

      const performScroll = () => {
        const element = document.getElementById(hash);
        if (element) {
          if (scroll) {
            scroll(element);
          } else {
            // Default offset to account for sticky/fixed navbar
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      };

      // Wrap scroll with standard timeouts to handle layout shifts (images, fonts loading)
      const triggerScrollSequence = () => {
        performScroll();
        const t1 = setTimeout(performScroll, 100);
        const t2 = setTimeout(performScroll, 300);
        const t3 = setTimeout(performScroll, 800);
        const t4 = setTimeout(performScroll, 1500);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
          clearTimeout(t4);
        };
      };

      // If it's a link to a different page/path
      if (path && path !== currentPath) {
        e.preventDefault();
        navigate(to);
        // Wait briefly for the route change to render before scrolling
        setTimeout(triggerScrollSequence, 100);
      } else {
        // Same page scroll
        e.preventDefault();
        window.history.pushState(null, null, `#${hash}`);
        triggerScrollSequence();
      }
    }
  };

  return (
    <Link ref={ref} to={to} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
});

HashLink.displayName = "HashLink";
