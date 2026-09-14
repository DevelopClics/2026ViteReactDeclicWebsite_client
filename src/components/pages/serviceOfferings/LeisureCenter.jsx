import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaFilePdf } from "react-icons/fa";

import "./ServiceOffering.css";

import TitleTwo from "../../elements/Titles/TitleTwo";
import PdfLeisure from "../../../img/services/animations-games/2026-accueil-centre-de-loisirs-preview.jpg";
import Quote from "../../elements/Quote";

const LeisureCenter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="container-fluid px-5 py-5 rounded-1">
        <div
          className={`row
            ${theme ? `text-light` : `text-dark`}`}
        >
          {/* TEMOIGNAGES */}

          <TitleTwo
            txt="Des animations clé en main"
            subtxt="pour vos centres de loisirs"
          />

          {/* <div className="container-fluid">
            <div className="container pt-0 pt-md-5 rounded-1">
              <div className="row"> */}
          <div
            className={`order-1 order-md-2 col-12 col-md-7
            ${theme ? `text-light` : `text-dark`}`}
          >
            {/* <TitleTwo txt="Titre 1" /> */}
            <h2 className="pt-2  text-start">
              Au c&oelig;ur du Teil, offrez aux enfants une journée ludique,
              nature et conviviale ! <br />
            </h2>
            {/* <p className="pt-2 Texte1 text-start">
                    Déclic et des Claps propose des animations encadrées par des
                    animateurs dédiés, sur deux sites complémentaires à
                    proximité :
                  </p> */}
            <h5 className="pt-2 mt-2 Texte1 text-start">
              <strong>
                Déclic et des Claps propose des animations encadrées par des
                animateurs dédiés, sur deux sites complémentaires à proximité :
              </strong>
              <ul>
                <li className="puce-lol">Espace à jeux</li>
                <li className="puce-lol">Espace nature</li>
              </ul>
            </h5>
            <h5 className="pt-2 mt-2 Texte1 text-start">
              <strong>Les petits plus qui font la différence :</strong>
              <ul>
                <li className="puce-lol">Bar à sirop offert</li>
                <li className="puce-lol">
                  Espaces extérieurs pour jouer et se détendre le temps souhaité
                </li>
                <li className="puce-lol">
                  Possibilité de pique-niquer :
                  <br />
                  – au Parc Laparel (au LOL)
                  <br />– ou à Zone 5 (serre en cas de mauvais temps)
                </li>
              </ul>
            </h5>
            <h5 className="pt-2 mt-2 Texte1 text-start">
              <strong>8 € par enfant (tarif unique)</strong>
              <ul>
                <li className="without-dot"> Une organisation simple !</li>
                <li className="without-dot">
                  Les deux sites sont situés à proximité sur la commune du Teil,
                  facilitant les déplacements et l'organisation de votre
                  journée.
                </li>
              </ul>
            </h5>

            <Quote
              line1="Ces deux séances ont été une réussite ! "
              line2="Les enfants n&#39;ont
              fait que des bons retours."
              line3="Encore un grand merci à vous et votre équipe pour l&#39;accueil et
              l&#39;accompagnement des enfants."
              // line4=""
              line5="A très bientôt pour
              d&#39;autres parties… "
              sign="L’ALPEV de Viviers – Octobre 2024"
            />
          </div>
          <div className="order-2 order-md-1 col-12 col-md-5">
            <div className="mt-3">
              <a
                href="https://www.calameo.com/read/007756043c34098d2377d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-75"
              >
                <button
                  type="button"
                  className={`btn btn-lg fw-bold w-75 
                  ${
                    theme
                      ? `nav-style-black btn-outline-light`
                      : `nav-style-white btn-outline-dark`
                  }`}
                >
                  <FaFilePdf className="pdf-icon mb-1" />
                  Plaquette d'accueil des centres de loisirs
                  <div>
                    <img src={PdfLeisure} alt="preview" className="img-fluid" />
                  </div>
                </button>
              </a>
              {/* </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* ANNIV */}

          {/* TEAM */}

          {/* SOIREE */}
        </div>
      </div>
    </>
  );
};

export default LeisureCenter;
