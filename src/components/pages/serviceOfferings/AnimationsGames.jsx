import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaFilePdf } from "react-icons/fa";

import "./ServiceOffering.css";

import TitleTwo from "../../elements/Titles/TitleTwo";
import picture from "../../../img/services/wood-games/IMG_2659.jpg";
import pct01 from "../../../img/services/wood-games/wg-001.JPG";
import pct02 from "../../../img/services/wood-games/wg-002.JPG";
import pct03 from "../../../img/services/wood-games/wg-003.JPG";
import pct04 from "../../../img/services/wood-games/wg-004.JPG";
import pct05 from "../../../img/services/wood-games/wg-005.JPG";
import pct06 from "../../../img/services/wood-games/wg-006.JPG";
import pct07 from "../../../img/services/wood-games/wg-007.JPG";
import pct08 from "../../../img/services/wood-games/wg-008.JPG";
import pct09 from "../../../img/services/wood-games/wg-009.JPG";
import pct10 from "../../../img/services/wood-games/wg-010.JPG";
import pctAE01 from "../../../img/services/anniv-enfants/anniv-enfants_001.jpg";
import pctAE02 from "../../../img/services/anniv-enfants/anniv-enfants_002.jpg";
import PctTb001 from "../../../img/services/team-building/team-building-01.jpg";
import PctTb002 from "../../../img/services/team-building/team-building-02.jpg";
import BirthCard from "../../../img/services/anniv-enfants/anniv-enfants-affiche.png";
import PdfAnim from "../../../img/services/animations-games/2026-animations-jeux-preview.jpg";

import Picture from "../../elements/Picture";
import Quote from "../../elements/Quote";
// import BtnContact from "../../elements/buttons/BtnContact";
import CarteInfos from "../../elements/cards/CardInfos";
// import TitleThree from "../../elements/Titles/TitleThree";

const AnimationsGames = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="container-fluid px-5 py-5 rounded-1">
        {/* <div className="text-middle text-light">
          <div className="TitreBg1 rounded-4 py-3 py-md-5 mx-5">
            <h1>
              <span className="Titre1 rounded-4 px-5">Les Animations Jeux</span>
            </h1>
          </div>
        </div> */}

        <div
          className={`row
            ${theme ? `text-light` : `text-dark`}`}
        >
          {/* TEMOIGNAGES */}
          <TitleTwo txt="Location de jeux en bois" />
          <div className="col-12 col-lg-12 col-xl-4">
            <div className="pt-5 Texte1 text-start">
              <h2 className="text-start">
                <strong>
                  <u>Vous cherchez à rendre unique</u> :
                </strong>{" "}
              </h2>
              <div>
                <ul>
                  <li className="puce-animgames">
                    <h5>Votre anniversaire</h5>
                  </li>
                  <li className="puce-animgames">
                    <h5>Votre assemblée générale</h5>
                  </li>
                  <li className="puce-animgames">
                    <h5>Ou votre fête des écoles ?</h5>
                  </li>
                  {/* <li>Ou votre fête des écoles ?</li> */}
                </ul>
                <br />
                <h5>
                  Faites une pause conviviale et ludique !
                  <br />
                  <br />
                  Déclic et des Claps vous propose ses jeux en bois géants pour
                  animer vos événements. <br /> Un grand nombre de nos jeux sont
                  des pièces uniques faites sur mesure et avec talent par nos
                  équipes.
                  <br />
                  {/* <span style={{ color: "red" }}>
                Photos des jeux à la location à ajouter avec les noms à côtés =
                en attente d’élément Caroline
              </span> */}
                  <br />
                  Notre prestation comprend le transport, l’installation et
                  l’animation des jeux. <br /> <br />
                </h5>
                {/* <strong>
                <u>Devis sur demande</u> :
              </strong>
              <br />
              <br /> */}
              </div>
              <div className="col mt-2 text-center mx-auto">
                <CarteInfos
                  title="Plus d'informations"
                  text="Devis sur demande"
                  phone="06 58 23 03 26"
                  email="accueil@declicetdesclaps.fr"
                  link="/contact/#write"
                  textbutton="Ecrivez-nous"
                />
              </div>
              {/* <div className="mt-auto"> */}
              {/* <Link to="/contact/#banner">
                  <button
                    type="button"
                    className={`btn btn-sm fw-bold
          ${theme ? `btn-outline-light` : `btn-outline-dark`}
          `}
                  >
                    Contactez-nous
                  </button>
                </Link> */}
              {/* <BtnContact />
              </div> */}
            </div>

            <br />
          </div>

          <div className="col-12 pb-3 col-xl-6 col-xl-8">
            <img
              src={picture}
              className="mt-lg-4 rounded-5 img-fluid"
              alt="logo"
            />
          </div>

          <div className="mb-3 mb-lg-4 col-12 col-xl-8">
            <Quote
              line1='Pour notre mariage nous avons fait appel à Déclic et des
              Claps pour créer et animer un "qui- est-ce" géant
              personnalisé avec les invités du mariage !'
              line2="Une chouette
              idée originale qui a ravit tout le monde ! "
              line3="vraiment merci !!"
              // line4=""
              // line5=" "
              sign="Anne-Sophie HENNION"
            />
          </div>
          <div className="mb-3 mb-lg-4 col-12 col-xl-4"></div>

          <div className="col-12 col-sm-6 col-md-6 col-xl-4 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct01}
                alt="image01"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-2 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct02}
                alt="image02"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-2 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct03}
                alt="image03"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-2 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct04}
                alt="image04"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-2 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct05}
                alt="image05"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-2 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct06}
                alt="image06"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-2 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct07}
                alt="image07"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-4 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct08}
                alt="image08"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-2 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct09}
                alt="image09"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-2 pb-3">
            <div style={{ height: "400px" }} className="w-100">
              <Picture
                classe="rounded-5 w-100 h-100"
                pct={pct10}
                alt="image10"
              />
            </div>
          </div>

          <div className="mb-3 mb-lg-4 col-12 col-xl-8">
            <Quote
              line1="Il en est du jeu comme du je… Soit il est « centré sur lui-même », soit il se partage !"
              line2="Les jeux de déclic et des claps ont été partagés ce 19 août entre les visiteurs du Grand Site de l’Aven d’Orgnac, créant ainsi des liens fugaces mais complices ; entre visiteurs et animateurs de Déclic et des Claps, permettant de faire vivre nos espaces extérieurs avec moult exclamations et cris heureux de vainqueurs ou, plus déçus, de vaincus. Bref, les jeux de Déclic et des Claps sont beaux, drôles, pédagogiques ; leur animation est juste bien calibrée pour laisser l’autonomie aux joueurs ou les inciter quand ils hésitent ! Merci aux Jeux qui se partagent 😊👌🙏"
              // line3=""
              // line4=""
              // line5=" "
              sign="Isabelle SEREN - Communication -  Marketing – Digital"
            />
          </div>

          {/* ANNIV */}
          <div className="col-12 col-xl-6">
            <TitleTwo txt="Animations jeux" subtxt="pour centres de loisirs" />
            {/* <TitleThree txt="pour centres de loisirs" /> */}

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

            {/* <div style={{ color: "red" }}>
              En attente d’un témoignage de CLEFS - Floriane
            </div> */}
            <div className="mt-3">
              <a
                href="https://www.calameo.com/read/007756043e1eabd13300d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-50"
              >
                <button
                  type="button"
                  className={`btn btn-lg fw-bold w-50 
                  ${
                    theme
                      ? `nav-style-black btn-outline-light`
                      : `nav-style-white btn-outline-dark`
                  }`}
                >
                  <FaFilePdf className="pdf-icon  mb-1" />
                  Plaquette animation jeux
                  <div>
                    <img src={PdfAnim} alt="preview" className="img-fluid" />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <TitleTwo txt="Anniversaires enfants" />

            <h2 className="pt-2  text-start">
              Vous manquez d’idées pour les anniversaires de vos bambins ? Marre
              des salles de jeux bruyantes et fermées ?
            </h2>
            <p className="pt-2 lh-1 Texte1 text-start">
              Le LOL vous ouvre grand les portes pour souffler les bougies de
              vos enfants !
            </p>
            <img
              className="col-12 mb-4 mb-lg-0 col-lg-12 rounded-5"
              src={BirthCard}
              alt="Carte Anniversaire enfant"
            ></img>
            <h5 className="pt-2 Texte1 text-start">
              Animateurs jeux dédiés, chasse au trésor, barbe à papa, boissons
              et crêpes, jeux de société, tables d’anniversaire, cartons
              d’invitations, le tout au LOL au cœur du Parc Laparel !
              <br /> <br /> 12,5 € par enfant (en présence d’un adulte
              responsable des enfants)
              {/* <br /> <br />
              <BtnContact />
              <br /> */}
            </h5>

            <div className="row">
              <div className="col-12 col-lg-6 d-flex mb-3">
                <div style={{ height: "300px" }} className="w-100">
                  <Picture
                    pct={pctAE01}
                    classe="rounded-5 w-100 h-100"
                    alt="Photo vue intérieure du LOL"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-6 d-flex mb-3">
                <div style={{ height: "300px" }} className="w-100">
                  <Picture
                    pct={pctAE02}
                    classe="rounded-5 w-100 h-100"
                    alt="Photo vue extérieure du LOL"
                  />
                </div>
              </div>
            </div>

            {/* <div className="row">
              <Picture
                classe="col-12 col-md-6 py-2 py-lg-3 img-fluid rounded-5"
                pct={pctAE01}
                alt="Photo d'une Salariée à la conduite d'un vehicule electrique"
              />
              <Picture
                classe="col-12 col-md-6 py-2 py-lg-3 img-fluid  rounded-5"
                pct={pctAE02}
                alt="Photo d'Olivier REY animant un groupe d'enfants"
              />
            </div> */}

            <div className="col mt-2 text-center mx-auto">
              <CarteInfos
                title="Plus d'informations"
                text="Devis sur demande"
                phone="06 58 23 03 26"
                email="accueil@declicetdesclaps.fr"
                link="/contact/#write"
                textbutton="Ecrivez-nous"
              />
            </div>
            {/* <span style={{ color: "red" }}>
              Photos à remplacer par des photos avec un floutage correct
            </span> */}
          </div>
          {/* TEAM */}
          <div className="col-12 col-xl-6">
            <TitleTwo txt="Journées de team-building" />
            <h5 className="pt-2 Texte1 text-start"></h5>

            <div className="row">
              <div className="col-12 col-lg-6 d-flex mb-3">
                <div style={{ height: "400px" }} className="w-100">
                  <Picture
                    pct={PctTb001}
                    classe="rounded-5 w-100 h-100"
                    alt="Photo vue intérieure du LOL"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-6 d-flex mb-3">
                <div style={{ height: "400px" }} className="w-100">
                  <Picture
                    pct={PctTb002}
                    classe="rounded-5 w-100 h-100"
                    alt="Photo vue extérieure du LOL"
                  />
                </div>
              </div>

              {/* <Picture
                classe="col-12 mb-3 mb-md-3 mb-lg-0 col-md-6 col-lg-4 mx-auto img-fluid rounded-5"
                pct={PctTb001}
                alt="Photo du Team Builduing"
              />
              <Picture
                classe="col-12 col-lg-8 mx-auto   img-fluid rounded-5"
                pct={PctTb002}
                alt="Photo du Team Builduing"
              /> */}
            </div>

            <div className="pt-3">
              <Quote
                line1="Journée de cohésion :"
                line2="samedi, toute l’équipe de salarié.e.s et
              bénévoles du Centre socioculturel Les CLEFS, ont partagé la
              journée au LOL."
                line3="Interconnaissance, rigolade, partenaires,
              rigolade, projet social, rigolade, bref, une joyeuse journée ! Le
              tout accueilli à merveille par l’équipe du LOL ; café, repas et
              après-midi jeux. A bientôt pour de nouvelles aventures joyeuses et
              conviviales ! »"
                line4=""
                line5=""
                sign="Marie-Claire PONCET, Directrice de CLEFS - octobre 2024"
              />
            </div>
          </div>
          {/* SOIREE */}
          <div className="col-12 col-lg-6">
            <TitleTwo txt="Soirées afterwork" />
            <h5 className="pt-2 Texte1 text">
              <Quote
                line1="Dans le cadre de la mise en valeur du Teil et de ses lieux de
              sociabilité auprès des jeunes professionnel.les, l’équipe du LOL a
              fait un formidable travail d’accueil et d’animation de notre
              soirée afterwork."
                line2="Nous avons été accueilli.es avec gaieté et bonne
              humeur. Les jeux d’interconnaissance ont fait fureur ! "
                line3="Olivier a
              eu la bonne idée de proposer un buffet mettant en avant
              exclusivement des produits locaux. Des délicieuses gaufres ont
              ravi les invité.es, accompagnant parfaitement avec l’ambiance
              festive et amicale autour de petits jeux. "
                line4=" Nicolas, Rabah, Loïc et
              Olivier ont grandement contribué à l’amusement de tous et toutes
              grâce aux jeux."
                line5="Bref, d’après les retours, une soirée joyeuse,
              pleine de découvertes et de bonnes rencontres !"
                sign="Louise - Mairie du Teil – Novembre 2024"
              />

              <br />
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationsGames;
