import React from "react";

import { LazyLoadComponent } from "react-lazy-load-image-component";

const Map = ({ src, dimensions }) => {
  return (
    <LazyLoadComponent>
      <iframe
        title="map"
        className={`mt-3 rounded-5  text-white`}
        // style={{ width: "100%", height: "250px" }}
        style={dimensions}
        src={src}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </LazyLoadComponent>
  );
};

export default Map;
