import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import LogoGuinguette from "../../../img/logo-guinguette-mobile.png";
import PctGM001 from "../../../img/services/gm-001.jpg";
// import TitleTwo from "../../elements/Titles/TitleTwo";
import Picture from "../../elements/Picture";

const MobileTavern = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* <div id="mobile-tavern" className="pt-5"></div> */}
      <div className="container pt-5 rounded-1">
        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          {/* <TitleTwo txt="Titre 1" /> */}
          <div className="row">
            <div className="col-12 col-md-8">
              <h2 className="pt-2  text-start">
                Vous voulez organiser un évènement et vous n’avez pas de buvette
                ou de petite restauration ? Quel dommage… !
              </h2>

              <p className="pt-2 lh-1 Texte1 text-start">
                La Guinguette Mobile s’invite dans les quartiers du Teil ou les
                communes environnantes pour agrémenter vos évènements (soirées
                de quartier, spectacles, inauguration, projections plein air,
                fête de village…). Elle se déplace à la demande et sans
                contrepartie financière !
              </p>
              <h5 className="pt-2 Texte1 text-start">
                Retrouvez également, de mai à septembre, la Guinguette au Teil
                au skate-park, à La Violette, à Mélas ou à La Sablière pour
                boire un verre, manger un bout, écouter de la musique et jouer
                aux jeux !
                <br />
                <br />
                Véritable lieux de sociabilité, la Guinguette fait rencontrer
                petits et grands autour d’un même objectif : partager un bon
                moment.
                <br />
                <br />
                On construit votre prochain événement ensemble ?
                <br />
              </h5>
            </div>
            <div className="col-6 mx-auto col-md-4  text-middle text-light">
              {/* <Picture
                classe="col-12 w-100 h-50 img-fluid"
                pct={LogoGuinguette}
                alt="Logo Bienvenue Service Conciergerie"
              /> */}

              <img
                className="w-100 img-fluid"
                src={LogoGuinguette}
                alt="Logo Bienvenue Service Conciergerie"
              />
            </div>
            {/* <Picture
              classe="col-12 mx-auto mt-5 w-100 w-md-75 img-fluid rounded-5 position-background "
              pct={PctGM001}
              alt="Photo d'une Guinguette au quartier La Sablière"
            /> */}
            <div
              className="col-12 mx-auto my-5 rounded-5 position-background"
              style={{
                backgroundImage: `url(${PctGM001})`,
                height: "600px",
              }}
            />
          </div>

          {/* <span style={{ color: "red" }}>Intégrer le logo + des photos</span> */}
        </div>
      </div>
    </>
  );
};

export default MobileTavern;
