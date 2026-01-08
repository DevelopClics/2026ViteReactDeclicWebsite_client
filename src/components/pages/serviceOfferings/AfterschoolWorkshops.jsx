import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
// import TitleTwo from "../../elements/Titles/TitleTwo";
import pctPeri01 from "../../../img/services/perisco/perisco-01.jpg";
import pctPeri02 from "../../../img/services/perisco/perisco-02.JPG";
import Picture from "../../elements/Picture";

const AfterschoolWorkshops = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* <div id="after-school-workshops" className="pt-5"></div> */}
      <div className="container pt-5 rounded-1">
        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          {/* <TitleTwo txt="Titre 1" /> */}

          <h5 className="pt-2 Texte1 text-start">
            <div className="row">
              <div className="col-12 col-md-12">
                <h2 className="pt-2  text-start">
                  <strong>
                    Les écoles publiques et privées du Teil font confiance à nos
                    équipes pour animer, chaque semaine, 9 ateliers d’une heure
                    pendant les temps méridiens :
                  </strong>
                </h2>
              </div>
              <div className="col-12 col-md-3 ">
                <ul>
                  <li className="puce-peri">Relaxation</li>
                  <li className="puce-peri">Dessin manga</li>
                </ul>
              </div>
              <div className="col-12 col-md-3 ">
                <ul>
                  <li className="puce-peri">Cuisine</li>
                  <li className="puce-peri">Ateliers créatifs</li>
                </ul>
              </div>
              <div className="col-12 col-md-3 ">
                <ul>
                  <li className="puce-peri">Animation jeux</li>
                  <li className="puce-peri">Ateliers 5 sens</li>
                </ul>
              </div>
              <div className="col-12 col-md-3 "></div>
            </div>
            <br />
            Ces activités sont proposées sur la base des compétences de nos
            salariés, transmises avec joie et professionnalisme aux enfants
            teillois !
          </h5>

          <div className="row">
            <Picture
              classe="col-6 rounded-5 img-fluid"
              pct={pctPeri01}
              alt="Photo affichage"
            />
            <Picture
              classe="col-6 rounded-5 img-fluid"
              pct={pctPeri02}
              alt="Photo affichage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterschoolWorkshops;
