import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const ResponsiveBanner = ({
  bannerXXL,
  bannerXL,
  bannerLG,
  bannerMD,
  bannerSM,
  bannerXS,
}) => {
  const [loading, setLoading] = useState(true);
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const updateImageSrc = () => {
      let newSrc;
      if (window.matchMedia("(min-width: 1400px)").matches) {
        newSrc = bannerXXL || bannerXL;
      } else if (window.matchMedia("(min-width: 1200px)").matches) {
        newSrc = bannerXL;
      } else if (window.matchMedia("(min-width: 992px)").matches) {
        newSrc = bannerLG;
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        newSrc = bannerMD;
      } else if (window.matchMedia("(min-width: 576px)").matches) {
        newSrc = bannerSM;
      } else {
        newSrc = bannerXS;
      }

      if (newSrc) {
        setCurrentSrc(newSrc);
      } else {
        setCurrentSrc("");
        setLoading(false);
      }
    };

    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);

    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, [bannerXXL, bannerXL, bannerLG, bannerMD, bannerSM, bannerXS]);

  useEffect(() => {
    if (imageHasLoaded) {
      setLoading(false);
    } else {
      const spinnerTimer = setTimeout(() => {
        setShowSpinner(true);
      }, 10); // Show spinner after 10ms if image is still loading
      return () => clearTimeout(spinnerTimer);
    }
  }, [imageHasLoaded]);

  return (
    <div className="banner-frame">
      {loading && showSpinner && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Spinner animation="border" role="status" variant="secondary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {currentSrc && (
        <img
          className="Banner"
          src={currentSrc}
          alt="bienvenue"
          onLoad={() => {
            console.log(
              "ResponsiveBanner: Image loaded successfully. src:",
              currentSrc
            );
            setImageHasLoaded(true);
          }}
          onError={() => {
            console.error(
              "ResponsiveBanner: Error loading image. src:",
              currentSrc
            );
            setImageHasLoaded(true);
          }}
          style={{
            visibility: loading ? "hidden" : "visible",
            opacity: loading ? 0 : 1,
            transition: "opacity 0.1s ease-in-out",
          }}
        />
      )}
    </div>
  );
};

export default ResponsiveBanner;
