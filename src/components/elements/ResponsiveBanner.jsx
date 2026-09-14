import React, { useState, useEffect, useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import ESS from "../../img/Engagé pour ESS_Logo_Rouge Framboise.svg";

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

  const bannerRef = useRef(null);
  const bgRef = useRef(null);

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
      }, 10);
      return () => clearTimeout(spinnerTimer);
    }
  }, [imageHasLoaded]);

  return (
    <div
      ref={bannerRef}
      className="banner-frame"
      style={{
        overflow: "hidden",
        visibility: loading ? "hidden" : "visible",
        opacity: loading ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
        position: "relative",
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: currentSrc ? `url(${currentSrc})` : "none",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "110% auto",
          backgroundAttachment: "fixed",
          zIndex: 0,
        }}
      />

      {/* ESS Logo  Upleft */}

      <img
        src={ESS}
        alt="Engagé pour l'ESS"
        style={{
          position: "absolute",
          top: "35px",
          left: "15px",
          width: "94px",
          height: "auto",
          zIndex: 2,
        }}
      />

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
          src={currentSrc}
          alt="bienvenue"
          onLoad={() => setImageHasLoaded(true)}
          onError={() => setImageHasLoaded(true)}
          style={{ display: "none" }}
        />
      )}
    </div>
  );
};

export default ResponsiveBanner;
