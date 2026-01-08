import React from "react";

import { LazyLoadComponent } from "react-lazy-load-image-component";

const Picture = ({ classe, pct, alt }) => {
  return (
    <LazyLoadComponent>
      <img className={classe} src={pct} alt={alt} />
    </LazyLoadComponent>
  );
};

export default Picture;
