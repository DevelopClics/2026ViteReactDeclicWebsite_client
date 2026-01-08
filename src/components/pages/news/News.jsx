import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import EventSchedule from "./EventSchedule";

// import TalkAbout from "./TalkAbout";
import news from "/images/bannieres/visuel-actus.jpg";


import ResponsiveBanner from "../../elements/ResponsiveBanner";

import "../../../App.css";

// import TitleOne from "../../elements/Titles/TitleOne";
// import CarteInfos from "../../elements/Cards/CardInfos";

/* import H2 from "../Elements/H2"; */

const News = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <span id="banner"> </span>

      <div style={{ overflowY: "hidden !important" }}>
        {/* <img
          className={`Banner 
            ${theme ? `nav-style-black` : `nav-style-white`}`}
          src={news}
          alt="news"
        /> */}
        {/* <h1 className="text-over">
          En Savoir + <br />
          <p>&#8964;</p>
        </h1> */}
        <ResponsiveBanner
          bannerXL="/images/bannieres/visuel-actus-xl.jpg"
          bannerLG="/images/bannieres/visuel-actus-lg.jpg"
          bannerMD="/images/bannieres/visuel-actus-md.jpg"
          bannerSM="/images/bannieres/visuel-actus-sm.jpg"
          bannerXS="/images/bannieres/visuel-actus-xs.jpg"
        />
      </div>

      <div id="" className="pt-0 mb-5"></div>

      <div id="titre1" className="container-fluid">
        <div className="decal-left pt-0">
          <div className="col text-start text-light">
            {/* <TitleOne l1="Nos prochains" l2="rendez-vous" /> */}
            <EventSchedule />
          </div>
        </div>
      </div>
      <div className="mb-5 pb-5"></div>
    </>
  );
};

export default News;
