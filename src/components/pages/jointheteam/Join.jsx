import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Donate from "./Donate";
import Ourpartners from "./Ourpartners";


import ResponsiveBanner from "../../elements/ResponsiveBanner";

import "../../../App.css";

const Join = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="banner"> </div>

      <div>
        {/* <img
          className={`Banner 
            ${theme ? `nav-style-black` : `nav-style-white`}`}
          src={join}
          alt="rejoignez-nous"
        /> */}

        <ResponsiveBanner
          bannerXL="/images/bannieres/visuel-partenaires-et-clients-xl.jpg"
          bannerLG="/images/bannieres/visuel-partenaires-et-clients-lg.jpg"
          bannerMD="/images/bannieres/visuel-partenaires-et-clients-md.jpg"
          bannerSM="/images/bannieres/visuel-partenaires-et-clients-sm.jpg"
          bannerXS="/images/bannieres/visuel-partenaires-et-clients-xs.jpg"
        />
        {/* <h1 className="text-over">
          En Savoir + <br />
          <p>&#8964;</p>
        </h1> */}
      </div>
      <Ourpartners />
      <div className="mb-5 pb-5"></div>
    </>
  );
};

export default Join;
