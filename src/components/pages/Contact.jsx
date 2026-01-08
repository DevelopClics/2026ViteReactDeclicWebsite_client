import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";
import FormContact from "../elements/formContact";
import TimeTable from "../elements/TimeTable";


import ResponsiveBanner from "../elements/ResponsiveBanner";

import "../../App.css";
import Map from "../elements/Map";

import TitleTwo from "../elements/Titles/TitleTwo";

// import "../../App.css";

// import FormContact from "../elements/FormContact";
/* import H2 from "../Elements/H2"; */

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const map77 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.2781517469907!2d4.680473376769629!3d44.55041077107373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5145e5a5b7d85%3A0x6c6b24d29a8bafe8!2s77%20Rue%20de%20la%20R%C3%A9publique%2C%2007400%20Le%20Teil!5e0!3m2!1sfr!2sfr!4v1732023174678!5m2!1sfr!2sfr";
  const mapLOL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.3691072972101!2d4.686006357012637!3d44.55103119922754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b514f587cbb35d%3A0x7b0c63bfb20df57!2s6%20Rue%20du%2011%20Novembre%201918%2C%2007400%20Le%20Teil!5e0!3m2!1sfr!2sfr!4v1736411389389!5m2!1sfr!2sfr";

  return (
    <>
      <div id="banner"></div>
      <div>
        <ResponsiveBanner
          bannerXL="/images/bannieres/visuel-contact-xl.jpg"
          bannerLG="/images/bannieres/visuel-contact-lg.jpg"
          bannerMD="/images/bannieres/visuel-contact-md.jpg"
          bannerSM="/images/bannieres/visuel-contact-sm.jpg"
          bannerXS="/images/bannieres/visuel-contact-xs.jpg"
        />
      </div>

      <div className="pt-5"></div>

      <div className="container-fluid pt-5">
        <div className={`px-2 px-lg-5 ${theme ? `text-light` : `text-dark`}`}>
          <div className="row">
            {/* DEBUT BUREAUX */}
            <div className="decal-left col-12 col-lg-6">
              <TitleTwo txt="Nos bureaux administratifs" />

              <div className="row">
                <div className="col-12 order-2 order-lg-1 col-lg-4">
                  <Map
                    dimensions={{ width: "100%", height: "250px" }}
                    src={map77}
                  />
                </div>
                {/* Début Coordonnées bureaux */}

                <div className="col  col-lg-5">
                  <div className="pt-0 pt-lg-4 Texte1 text-start text-lg-end">
                    <h6>
                      <strong>
                        77 Rue de la République <br />
                        07400 Le Teil
                      </strong>
                      <br /> <br />
                      <strong>
                        accueil@declicetdesclaps.fr <br /> 09 55 23 69 90
                      </strong>
                    </h6>{" "}
                    <br />
                    <h6>
                      <strong>Ouvert du lundi au vendredi</strong>
                      <br />
                      09h00 à 12h00 <br /> 14h00 à 18h00
                    </h6>
                  </div>
                </div>
                {/* Fin Coordonnées bureaux */}
              </div>
            </div>
            {/* FIN BUREAUX */}
            {/* DEBUT LOL */}
            <div className="decal-right col-12 col-lg-6">
              <TitleTwo txt="Le LOL - Lieu Ouvert Ludique" />
              <div className="row">
                {/* Début Coordonnées LOL */}
                <div className="col-sm-6 col-lg-5 ">
                  <div className="pt-0 pt-lg-4 Texte1 text-start text-lg-end">
                    <h6>
                      <strong>
                        6 Avenue du 11 Novembre 1918
                        <br />
                        07400 Le Teil
                      </strong>
                    </h6>{" "}
                    <h6>
                      <br />
                      <strong>
                        Réservations pour les évènements :
                        <br />
                        06 58 23 03 26
                      </strong>
                    </h6>
                  </div>
                </div>

                {/* Fin Coordonnées LOL */}

                <div className="col-sm-12 col-lg-4">
                  <Map
                    dimensions={{ width: "100%", height: "250px" }}
                    src={mapLOL}
                  />
                </div>
              </div>
              {/* <TimeTable /> */}
            </div>

            {/* FIN LOL */}
            <div className="row mx-auto">
              <div className="col-12 col-md-6  mx-auto"></div>
              <div className="col-12 col-md-6 mx-auto">
                <TimeTable />
              </div>
            </div>

            {/* SUIVEZ NOUS */}

            {/* <div className="col-sm-6 col-lg-2"></div> */}
            <div className="col-12 col-md-6">
              <TitleTwo txt="Suivez-nous" />

              <div className="mx-2  px-5 pt-0 pt-lg-2 Texte1 text-center">
                <h4>
                  <strong>Déclic et des Claps – </strong>
                  <a
                    className={`rs-link ${theme ? `text-light` : `text-dark`}`}
                    href="https://www.facebook.com/profile.php?id=100094026464760"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <BiLogoFacebookSquare className="mb-1" />
                    </span>
                    <span>Facebook </span>
                  </a>

                  {/* Instagram */}
                  <a
                    className={`rs-link ${theme ? `text-light` : `text-dark`}`}
                    href="https://www.instagram.com/declicetdesclapsleteil/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <FaSquareInstagram className="mb-1" />
                    </span>
                    <span>Instagram </span>
                    {/* fin Instagram */}
                  </a>
                </h4>

                <h4>
                  <strong>Le LOL – </strong>
                  <a
                    className={`rs-link ${theme ? `text-light` : `text-dark`}`}
                    href="https://www.facebook.com/lieuouvertludique"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <BiLogoFacebookSquare className="mb-1" />
                    </span>
                    <span>Facebook</span>
                  </a>
                </h4>
              </div>
            </div>

            {/* EMAIL */}
            <div id="write" className="col-12 col-md-6">
              <TitleTwo txt="Ecrivez-nous" />
              <div id="form " className="col mx-0 mx-lg-5 px-0 px-lg-5">
                {/* <h4 className="pt-3 text-light text-uppercase text-middle">
                  <span>
                    <marquee
                      style={{ backgroundColor: "red" }}
                      className="Titre2 rounded-0 px-2"
                      behavior="scroll"
                    >
                      Nous écrire un e-mail…
                    </marquee>
                  </span>
                </h4> */}

                <FormContact />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5 pb-5"></div>
    </>
  );
};

export default Contact;
