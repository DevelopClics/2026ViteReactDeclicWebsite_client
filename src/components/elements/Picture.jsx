import React, { useRef } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PictureContent = ({ classe, pct, alt, speed }) => {
  const imgRef = useRef(null);

  useGSAP(
    () => {
      if (imgRef.current && speed) {
        gsap.fromTo(
          imgRef.current,
          { opacity: 0.4, scale: 1 },
          {
            opacity: 1,
            scale: 1.05,
            duration: speed,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          },
        );
      }
    },
    { dependencies: [speed] },
  );

  return (
    <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
      <img
        ref={imgRef}
        className={`img-fluid ${classe || ""}`}
        src={pct}
        alt={alt}
        style={{
          // width: "25",
          // height: "100%",
          objectFit: "cover", // 🔥 essentiel
          display: "block",
        }}
      />
    </div>
  );
};

const Picture = (props) => {
  return (
    <LazyLoadComponent>
      <PictureContent {...props} />
    </LazyLoadComponent>
  );
};

export default Picture;
