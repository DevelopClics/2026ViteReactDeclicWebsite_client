import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "../../../App.css";
import "./ServiceOffering.css";
import LolPartners from "../LolPartners";
import Map from "../../elements/Map";
import Picture from "../../elements/Picture";

// import LogoLOL from "../../../img/LOL/logo-LOL.svg";
import px from "../../../img/px.svg";
import PhotoLOLext from "../../../img/lol/visuel-ext-lol.webp";
import PhotoLOLint from "../../../img/lol/visuel-int-lol.jpeg";
// import PhotoLOLint2 from "../../../img/lol/visuel-int-lol2.jpg";
import TitleTwo from "../../elements/Titles/TitleTwo";
// import { BsReverseBackspaceReverse } from "react-icons/bs";
import Quote from "../../elements/Quote";
import TimeTable from "../../elements/TimeTable";
import CarteInfos from "../../elements/cards/CardInfos"; // Trivial change to force re-evaluation

const GameBar = () => {
  const { theme } = useContext(ThemeContext);
  const mapLOL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.3691072972101!2d4.686006357012637!3d44.55103119922754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b514f587cbb35d%3A0x7b0c63bfb20df57!2s6%20Rue%20du%2011%20Novembre%201918%2C%2007400%20Le%20Teil!5e0!3m2!1sfr!2sfr!4v1736411389389!5m2!1sfr!2sfr";

  return (
    <>
      <div className="container-fluid">
        {/* <div className="text-middle text-light">
          <TitleOne txt1=" Le Bar à Jeux Le LOL" />
        </div> */}
        <TitleTwo txt="Le LOL c'est…" />
        <div
          className={`row mx-0 mx-lg-5 px-0 px-lg-5
            ${theme ? `text-light` : `text-dark`}`}
        >
          {/* COL 1 */}
          <div className="col-12 col-md-6 col-lg-6 col-xl-3 pt-0 Texte1 text-start">
            <h5>
              <ul>
                <li className="puce-lol">
                  <strong>400 jeux </strong>de société
                </li>

                <li className="puce-lol">
                  Des <strong>animateurs</strong> pour vous accueillir et vous
                  faire découvrir des <strong>univers ludiques </strong>
                  différents
                </li>

                <li className="puce-lol">
                  Une belle <strong>terrasse</strong> au cœur du 1er parc urbain
                  du Teil, le <strong>Parc Laparel</strong>
                </li>
              </ul>
            </h5>
          </div>
          {/* COL 2 */}
          <div className="col-12 col-md-6 col-lg-6 col-xl-3 pt-0 Texte1 text-start">
            <h5>
              <ul>
                <li className="puce-lol">
                  Une <strong>carte de petite restauration</strong> issus de nos
                  <strong> producteurs locaux</strong> préférés, des frites
                  maison, des crêpes salées, des gaufres, humm… !!
                </li>

                <li className="puce-lol">
                  Des <strong>soirées à thèmes :</strong> concerts, karaokés,
                  soirées murder dinner, conférences, lectures, projections…
                </li>
              </ul>
            </h5>
          </div>
          {/* COL 3 */}
          <div className="col-12 col-md-6 col-lg-6 col-xl-3 pt-0 Texte1 text-start">
            <h5>
              <ul>
                <li className="puce-lol">
                  Un <strong>club d’échec </strong>les mercredis
                </li>
                <li className="puce-lol">
                  Et de<strong> jeux experts </strong>les jeudis
                </li>
                <li className="puce-lol">
                  Un<strong> brunch gourmand et ludique </strong>un dimanche sur
                  deux
                </li>
              </ul>
            </h5>
          </div>
          {/* LOGO LOL */}
          <div className="col-12 col-md-3">
            <img
              src={px}
              className={`  ${theme ? `logo-lol-dark` : `logo-lol-light`}`}
              alt="logo du LOL"
            />
          </div>
          <h5
            // style={{ marginTop: "-50px" }}
            className="lolbref col-12 pt-0 Texte1 text-start"
          >
            <strong>
              Bref… le LOL, c’est de la détente, du plaisir et des rencontres
              dans un lieu atypique et hétéroclite !
            </strong>
            <br />

            <br />
          </h5>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div style={{ height: "400px" }} className="w-100">
                <Picture
                  pct={PhotoLOLint}
                  classe="rounded-5 w-100 h-100"
                  alt="Photo vue intérieure du LOL"
                />
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <div style={{ height: "400px" }} className="w-100">
                <Picture
                  pct={PhotoLOLext}
                  classe="rounded-5 w-100 h-100"
                  alt="Photo vue extérieure du LOL"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <Map
                dimensions={{ width: "100%", height: "400px" }}
                src={mapLOL}
              />
            </div>
            <div className="col-12 col-md-6">
              <TimeTable />
            </div>
            {/* <div className="col-12 col-md-6">
              <h2 className="pt-2 text-start">
                <strong>
                  <u>Horaires d’ouverture du printemps</u> :
                </strong>{" "}
              </h2>

              <h5 className="bal col-12 pt-0 Texte1 text-start">
     
            </div> */}
          </div>

          <div className="row">
            {/* <span className="col-12 col-lg-6 text-center text-lg-end">
              <u>Abonnement</u> :{" "}
            </span>
            <span className="col-12 col-lg-6 text-center text-lg-start">
              <strong>2€ </strong> à l’année (espèce, chèque et CB acceptés)
            </span>
            <div className="d-block d-lg-none">-</div>
            <span className="col-12 col-lg-6 text-center text-lg-end">
              <u>Réservations pour les événements</u> :{" "}
            </span>
            <span className="col-12 col-lg-6 text-center text-lg-start">
              <strong>06 58 23 03 26</strong>
            </span> */}
            <div className="col-12 col-md-10 text-center mx-auto">
              <CarteInfos
                title="Plus d'informations"
                text="Abonnement : 2€ à l’année (espèce, chèque et CB acceptés)"
                phone="Réservations pour les événements : 06 58 23 03 26"
                email="accueil@declicetdesclaps.fr"
                link="/contact/#write"
                textbutton="Ecrivez-nous"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5 mx-0 mx-lg-5 px-lg-5">
        <div className="row ">
          <div className="col-12 col-lg-6 ">
            <TitleTwo txt="Témoignages" />
            <Quote
              line1="Si vous n’êtes pas encore allé au LOL, n’hésitez plus une
                  minute ! J’en suis adepte, oui, parce que c’est un endroit
                  sympathique, original et chaleureux, où l’on se retrouve
                  autour du jeu. "
              line2="Il y a toujours quelqu’un à qui parler, avec qui boire un
                  verre et à qui proposer un jeu. Parce que le jeu est un moyen
                  extraordinaire de communiquer et de se connaître rapidement !
                  Formidable aussi de se retrouver à la même table que des gens
                  que l’on aurait pas forcément côtoyés ailleurs… et de s’en
                  faire de nouveaux amis !"
              line3="Une petite faim et hop, il suffit de commander des frites
                  (elles sont délicieuses !) ou de passer commande par le biais
                  des tables communes. "
              line4="Vive le LOL !"
              line5="Et au plaisir de vous y croiser !"
              sign="Françoise HEYN "
            />
          </div>

          <div className="col-12 col-lg-6">
            <TitleTwo txt="Les Tables Communes" />
            <h2 className="pt-2  text-start">
              Besoin de communiquer sur votre événement ? <br />
              Vous n’avez pas le temps de courir les routes sinueuses d’Ardèche
              et de Drôme ?
              <br />
            </h2>
            <p className="pt-2 Texte1 text-start">
              Heureusement Déclic va sauver votre soirée !
            </p>
            <h5 className="pt-2 Texte1 text-start">
              Et oui…retrouvez en un lieu unique, au LOL, les différentes offres
              à emporter de la ville. Inspirées des « food court » urbains, les
              Tables Communes sont la première « Hall à manger » d’Ardèche.
            </h5>
            <p className="pt-2 Texte1 text-start">Comment cela fonctionne ?</p>
            <h5 className="pt-2 Texte1 text-start">
              Notre équipe vous apporte la carte des restaurateurs partenaires
              du Teil Vous choisissez parmi les propositions et vous la réglez
              auprès des serveurs Nous passons la commande, nous allons la
              chercher à vélo et nous vous l’apportons Vous profitez de votre
              commande aux tables du LOL ou du Parc Laparel. Bon Appétit !
              <br /> <br />
              Les Tables Communes, un service local innovant, éco-responsable et
              dynamique au service du territoire.
              <br /> <br />
              Fonctionnent du jeudi au samedi de 18h à 22h.
            </h5>
            <div className="d-none d-xxl-block">
              <LolPartners />
            </div>
          </div>
          <div className="d-block d-xxl-none">
            <LolPartners />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBar;
