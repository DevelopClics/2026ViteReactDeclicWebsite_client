import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import ResponsiveBanner from "../../elements/ResponsiveBanner";
// import offer from "../../../img/Bannières/visuel-offreService.jpg";

import "../../../App.css";
import GameBar from "./GameBar";
import AnimationsGames from "./AnimationsGames";
import Concierge from "./Concierge";
import Loc from "./Loc";
import EventLogistics from "./EventLogistics";
import Distribution from "./Distribution";
import MobileTavern from "./MobileTavern";
import AfterschoolWorkshops from "./AfterschoolWorkshops";
import TitleOne from "../../elements/Titles/TitleOne";

const Offerings = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div id="banner"></div>
      <div>
        {/* <img
          className={`Banner 
            ${theme ? `nav-style-black` : `nav-style-white`}`}
          src={offer}
          alt="Nos offres de service"
        /> */}
        <ResponsiveBanner
          bannerXL="/images/bannieres/visuel-offre-de-service-xl.jpg"
          bannerLG="/images/bannieres/visuel-offre-de-service-lg.jpg"
          bannerMD="/images/bannieres/visuel-offre-de-service-md.jpg"
          bannerSM="/images/bannieres/visuel-offre-de-service-sm.jpg"
          bannerXS="/images/bannieres/visuel-offre-de-service-xs.jpg"
        />
      </div>

      <div
        id="lol"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="Le bar à jeux" l2="Le LOL" />
          </div>
        </div>
      </div>
      <GameBar />

      <div
        id="animations"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="Les animations" l2="jeux" />
          </div>
        </div>
      </div>
      <AnimationsGames />

      <div
        id="bienvenue"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="La conciergerie" l2="de gîtes saisonniers" />
          </div>
        </div>
      </div>
      <Concierge />

      <div
        id="location"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="pt-0">
          <div className=" col text-start text-light">
            <TitleOne
              l1="La location de vaisselle"
              l2="et de décoration"
              l3="de table"
            />
          </div>
        </div>
      </div>
      <Loc />

      <div
        id="event-logistics"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="La logistique" l2="évènementielle" l3="" />
          </div>
        </div>
      </div>
      <EventLogistics />

      <div
        id="distribution"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="La diffusion" l2="de flyers et d'affiches" />
          </div>
        </div>
      </div>
      <Distribution />

      <div
        id="mobile-tavern"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="La guinguette" l2="mobile" />
          </div>
        </div>
      </div>
      <MobileTavern />

      <div
        id="after-school-workshops"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="pt-0">
          <div className="col text-start text-light">
            <TitleOne l1="Les ateliers" l2="périscolaires" />
          </div>
        </div>
      </div>
      <AfterschoolWorkshops />
      <div className="mb-5 pb-5"></div>
    </div>
  );
};

export default Offerings;
