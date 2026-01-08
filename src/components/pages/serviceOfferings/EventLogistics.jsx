import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./ServiceOffering.css";
import TitleTwo from "../../elements/Titles/TitleTwo";

import pctEventLog02 from "../../../img/services/event-logistic/event-log-002.jpg";

import Picture from "../../elements/Picture";
import Quote from "../../elements/Quote";
import BtnContact from "../../elements/buttons/BtnContact";
import CarteInfos from "../../elements/cards/CardInfos";

const EventLogistics = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* <div id="event-logistics" className="pt-5"></div> */}
      <div className="container pt-5 rounded-1">
        {/* <div className="text-middle text-light">
          <TitleOne txt1="La logistique évènementielle" />
        </div> */}

        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          {/* <TitleTwo txt="Titre 1" /> */}
          <div className="row">
            <div className="col-12 col-lg-9">
              <h2 className="pt-2 Texte1 text-start">
                <strong>
                  Vous avez envie de passer plus de temps avec vos invités
                  plutôt que de faire la vaisselle ? Vos bénévoles ne peuvent
                  pas se démultiplier ? Vous n’avez pas le don d’ubiquité ?
                </strong>
              </h2>
            </div>
            <div className="col-12 ">
              <p className="pt-2 lh-1 Texte1 text-start">
                Pas de panique… Particuliers, associations, collectivités,
                confiez-nous l’organisation pratique de vos évènements et
                déchargez-vous de la logistique événementielle !
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h5 className="pt-lg-5 Texte1 text-start">
                <span className="py-4">
                  <u>
                    <strong>Notre offre de service</strong>
                  </u>
                    :
                </span>
                <ul>
                  <li className="puce-event">
                    Aide au montage et démontage d&#39;événements
                  </li>
                  <li className="puce-event">
                    Accueil du public, tenue de la billetterie, prise
                    d’inscriptions
                  </li>
                  <li className="puce-event">Gardiennage d’expositions</li>
                  <li className="puce-event">
                    Décoration de vos salles, matériel d’animation (boule à
                    facette, sons et lumières…)
                  </li>
                  <li className="puce-event">
                    Dressage des tables, tenue du bar et des barbecues
                  </li>
                  <li className="puce-event">
                    Débarrassage, rangement, vaisselle de vos repas et soirées
                  </li>
                </ul>
              </h5>
              {/* <h5 className="pt-lg-5 Texte1 text-start">
                <h2 className="py-4">
                  <u>Notre offre de service</u>  :
                </h2>
                <ul>
                  <li className="puce-event">
                    Aide au montage et démontage d&#39;événements
                  </li>
                  <li className="puce-event">
                    Accueil du public, tenue de la billetterie, prise
                    d’inscriptions
                  </li>
                  <li className="puce-event">Gardiennage d’expositions</li>
                  <li className="puce-event">
                    Décoration de vos salles, matériel d’animation (boule à
                    facette, sons et lumières…)
                  </li>
                  <li className="puce-event">
                    Dressage des tables, tenue du bar et des barbecues
                  </li>
                  <li className="puce-event">
                    Débarrassage, rangement, vaisselle de vos repas et soirées
                  </li>
                </ul>
              </h5> */}
              {/* <div className="mt-5 text-start">
                <p>Faites-nous part de votre projet ! </p>
                <BtnContact />
              </div> */}
              <div className="col m-2 text-center mx-auto">
                <CarteInfos
                  title="Faites-nous part de votre projet !"
                  text="Devis sur demande"
                  phone="06 58 23 03 26"
                  email="accueil@declicetdesclaps.fr"
                  link="/contact/#write"
                  textbutton="Ecrivez-nous"
                />
              </div>
            </div>
            <div className="col-12 mt-md-5 col-md-6">
              <Picture
                classe="col-12 col-md-12 mt-md-5 rounded-5 img-fluid"
                pct={pctEventLog02}
                alt="Photo affichage"
              />
            </div>

            {/* <div className="col-12 col-md-6">
              <Picture
                classe="col-12 col-md-12 mt-4  rounded-5 img-fluid"
                pct={pctEventLog02}
                alt="Photo affichage"
              />
            </div>
            <div className="col-12 col-md-6">
              <Picture
                classe="col-12 col-md-12 mt-4 mx-auto rounded-5 img-fluid"
                pct={pctEventLog03}
                alt="Photo affichage"
              />
           
            </div> */}
            <div className="col-12 mt-4">{/* <EventsPartners /> */}</div>
            {/* <div className="row"> */}
          </div>

          <TitleTwo txt="Témoignage" />

          <h5 className="pt-2 Texte1 text-start">
            <Quote
              line1="Réouverture d’un bistro éphémère le temps du Festival du cinéma
              italien"
              line2="Je rends hommage à la qualité de votre service !"
              line3="On sent votre
            personnel fier de participer à un évènement culturel qui rayonne
            bien au-delà de notre territoire et le bonheur de participer à son
            succès."
              line4="Travailler avec vous dans le cadre de projets co-construits, c’est
            participer au développement du territoire dans lequel nous sommes
            ancrés, à l’insertion de personnes privées d’emploi et prouver que
            la culture peut être source d’activité économique."
              line5="Longue vie donc à Déclic set des Claps et à très vite pour un
            nouveau partenariat !"
              sign="Alexandre COVELLI - Président d’Assofital – novembre 2023"
            />
          </h5>
        </div>
      </div>
    </>
  );
};

export default EventLogistics;
