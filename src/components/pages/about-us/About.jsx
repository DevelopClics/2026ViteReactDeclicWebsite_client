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
      <div
        id="national-experimention"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="row pt-0">
          <div className="decal-left col text-start text-light">
            <TitleOne l1="Qui" l2="sommes nous ?" />
          </div>
        </div>
      </div>
      <AboutExperiment />

      <div
        id="tzcld"
        className="container-fluid titre-container pt-1 mb-5"
        style={{ scrollMarginTop: "150px" }}
      >
        <div className="row pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="Territoire" l2="Zéro Chômeur" l3="de Longue Durée" />
          </div>
        </div>
      </div>
      <AboutTzcld />

      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <div
          id="team"
          className="container-fluid titre-container pt-1 mb-5"
          style={{ scrollMarginTop: "150px" }}
        >
          <div className="row pt-0">
            <div className="col text-start text-light">
              <TitleOne l1="L'équipe" l2="de Déclic" />
            </div>
          </div>
        </div>

        <AboutVisualsTeam />
        <AboutTeam />
      </div>

      <div className="mb-5 pb-5"></div>
    </>
  );
};

export default About;
