import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./ServiceOffering.css";
import pctDiff01 from "../../../img/services/diffusion/diff-001.jpg";
import pctDiffEvt01 from "../../../img/services/diffusion/Evenements-DEDC-01.png";
import pctDiffEvt02 from "../../../img/services/diffusion/Evenements-DEDC-02.png";
import Picture from "../../elements/Picture";
import EventsPartners from "../EventsPartners";
import TitleTwo from "../../elements/Titles/TitleTwo";
import Quote from "../../elements/Quote";
import BtnContact from "../../elements/buttons/BtnContact";
import CarteInfos from "../../elements/cards/CardInfos";

const Distribution = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* <div id="distribution" className="pt-5"></div> */}
      <div className="container pt-5 rounded-1">
        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          {/* <TitleTwo txt="Titre 1" /> */}
          <div className="row">
            <div className="col-12 col-lg-9">
              <h2 className="pt-2  text-start">
                Besoin de communiquer sur votre événement ? <br />
                Vous n’avez pas le temps de courir les routes sinueuses
                d’Ardèche et de Drôme ?
                <br />
              </h2>
              <p className="pt-2 lh-1 Texte1 text-start">
                {" "}
                Soyez serein… Déclic et des Claps vous accompagne rapidement et
                efficacement dans la distribution de vos flyers et
                d&#39;affiches.
              </p>
              <h5 className="Texte1 text-start">
                {/* <span style={{ color: "red" }}>
              Reprendre le visuel de la carte postale{" "}
            </span> */}

                <ul>
                  <li className="puce-diff">
                    Distribution de tracts dans les commerces et lieux publics
                    (mairies, bibliothèques...)
                  </li>
                  <li className="puce-diff">
                    Flyage de main à main (marchés, festivals, événements
                    culturels...)
                  </li>
                  <li className="puce-diff">Affichage tous formats</li>
                </ul>
              </h5>
            </div>

            <div className="col-12 col-lg-3 mb-4">
              <Picture
                classe="col-4 rounded-5 img-fluid  w-100"
                pct={pctDiff01}
                alt="Photo affichage"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-6 d-flex">
              <Picture
                pct={pctDiffEvt01}
                classe="rounded-5 w-100 h-100"
                alt="Photo vue intérieure du LOL"
              />
            </div>

            <div className="col-12 col-lg-6 d-flex">
              <Picture
                pct={pctDiffEvt02}
                classe="rounded-5 w-100 h-100"
                alt="Photo vue extérieure du LOL"
              />
            </div>
            {/* 
          <div className="row">
            <Picture
              classe="col-12 pb-3 pb-md-0 col-md-6 rounded-5 img-fluid"
              pct={pctDiffEvt01}
              alt="Photo affichage"
            />
            <Picture
              classe="col-12 col-md-6  rounded-5 img-fluid"
              pct={pctDiffEvt02}
              alt="Photo affichage"
            /> */}
            <div className="text-center">
              <TitleTwo txt="Témoignage" />
              <div className="row">
                <div className="col-12 col-md-8 mx-auto">
                  <Quote
                    line1="Redoutablement efficaces sur l’affichage !"
                    line2="Très réactifs et arrangeants sur l’opérationnel"
                    sign="Sophie BELLENGER - Responsable communication de la SMAC 07"
                  />
                </div>
                <div className="col-12 col-md-4 mt-3 mt-md-5 text-center mx-auto">
                  <CarteInfos
                    title="Plus d'informations"
                    text="Devis sur demande"
                    phone="06 58 23 03 26"
                    email="accueil@declicetdesclaps.fr"
                    link="/contact/#write"
                    textbutton="Ecrivez-nous"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <br />
          <h2>
            Devis gratuit sur demande
            <br />
            <BtnContact />
          </h2>
          <br /> */}
        </div>

        <div className="pt-5">
          <h2>Ils nous font déjà confiance !</h2>
        </div>
        <div className="col-12 mt-4">
          <EventsPartners /> 
        </div>
      </div>
    </>
  );
};

export default Distribution;
