// hooks/useScrollAnimations.js
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = (containerRef) => {
  useGSAP(
    () => {
      // Left block animation
      gsap.from(".decal-left", {
        opacity: 0,
        x: -500,
        scale: 2,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".decal-left",
          start: "top 50%",
          once: true,
        },
      });

      // Right block animation
      gsap.from(".decal-right", {
        opacity: 0,
        x: 500,
        scale: 2,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".decal-right",
          start: "top 50%",
          once: true,
        },
      });

      // Zoom sections
      gsap.utils.toArray(".zoom-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          scale: 1.5,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            once: true,
          },
        });
      });
    },
    { scope: containerRef },
  );
};
