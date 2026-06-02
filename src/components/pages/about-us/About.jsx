import AboutExperiment from "./AboutExperiment";

import ResponsiveBanner from "../../elements/ResponsiveBanner";

import "../../../App.css";
import AboutTzcld from "./AboutTzcld";
import AboutTeam from "./AboutTeam";
import AboutVisualsTeam from "./AboutVisualsTeam";
import TitleOne from "../../elements/Titles/TitleOne";

const About = () => {
  return (
    <>
      <span id="banner"></span>
      <div>
        {/* <img className="Banner" id="about-experiment" src={team} alt="team" /> */}
        <ResponsiveBanner
          bannerXL="/images/bannieres/visuel-about.jpg"
          bannerLG="/images/bannieres/visuel-about-lg.jpg"
          bannerMD="/images/bannieres/visuel-about-md.jpg"
          bannerSM="/images/bannieres/visuel-about-sm.jpg"
          bannerXS="/images/bannieres/visuel-about-xs.jpg"
        />
      </div>
      <div id="national-experimention" className="pt-5 mb-5"></div>

      <div className="container-fluid titre-container">
        <div className="row pt-0">
          <div className="decal-left col text-start text-light">
            <TitleOne l1="Qui" l2="sommes nous ?" />
          </div>
        </div>
      </div>
      <AboutExperiment />

      <div id="tzcld" className="pt-5"></div>
      <div className="container-fluid titre-container">
        <div className="row pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="Territoire" l2="Zéro Chômeur" l3="de Longue Durée" />
          </div>
        </div>
      </div>
      <AboutTzcld />

      {/* <div id="dedc" className="pt-5"></div> */}
      <div id="team" className="pt-5"></div>
      <div className="container-fluid titre-container">
        <div className="row pt-0">
          <div className="col text-start text-light">
            <TitleOne l1="L'équipe" l2="de Déclic" />
          </div>
        </div>
      </div>

      <AboutVisualsTeam />
      <AboutTeam />

      <div className="mb-5 pb-5"></div>
    </>
  );
};

export default About;
