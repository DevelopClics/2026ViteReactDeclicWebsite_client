import React, { useContext, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../../context/ThemeContext";
import "./Welcome.css";

import Carte from "../elements/cards/Card";
import "../../App.css";
import imglol from "../../img/Services/visuel-lol-sm.jpg";
import imganimjeux from "../../img/Services/anim-jeux-sm.jpg";
import imgperi from "../../img/Services/peri-sm.jpg";
import imgguing from "../../img/Services/guing-sm.png";
import imgloc from "../../img/Services/locvaiss-sm.jpg";
import imgconci from "../../img/Services/conciergerie-sm.jpg";
import imgdiff from "../../img/Services/diff-sm.jpg";
import imglogeve from "../../img/Services/log-event-sm.jpg";
import Counter from "../elements/Counter";
// import TitleOne from "../elements/Titles/TitleOne";
import TitleTwo from "../elements/Titles/TitleTwo";
import CarteForces from "../elements/cards/CardStrengths";
import CarteNombres from "../elements/cards/CardNumbers";
import NEXTDATES from "../datas/nextDatesDatas.json";
import ResponsiveBanner from "../elements/ResponsiveBanner";
import CarteInfos from "../elements/cards/CardInfos.jsx";

// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Welcome = () => {
  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.from(boxRef.current, {
      y: -720,
      duration: 0.5,
      ease: "power3.in",
    });
  }, {});

  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: -400,
      duration: 1,
      ease: "power3.in",
    });
  }, {});

  gsap.registerPlugin(ScrollTrigger);
  const serviceRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(serviceRef.current, {
        y: -400,
        duration: 2,
        ease: "power1.in",
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top bottom",
          end: "top top",
          scrub: false,
        },
      });
    },
    { scope: serviceRef } // ⭐ important when using useGSAP
  );

  const { theme } = useContext(ThemeContext);
  const [ourServices] = useState([
    {
      pct: imglol,
      title: "LOL",
      content: "Bar à jeux",
      link: "/services/#lol",
    },
    {
      pct: imganimjeux,
      title: "Location",
      content: "de jeux en bois",
      link: "/services/#animations",
    },
    {
      pct: imgconci,
      title: "Conciergerie",
      content: "de gîtes saisonniers",
      link: "/services/#bienvenue",
    },
    {
      pct: imgloc,
      title: "Location",
      content: "de vaisselle et de décoration de tables",
      link: "/services/#location",
    },
    {
      pct: imglogeve,
      title: "Logistique",
      content: "évènementielle",
      link: "/services/#event-logistics",
    },
    {
      pct: imgdiff,
      title: "Diffusion",
      content: "de flyers et affiches",
      link: "/services/#distribution",
    },
    {
      pct: imgguing,
      title: "Guinguette mobile",
      content: "",
      link: "/services/#mobile-tavern",
    },
    {
      pct: imgperi,
      title: "Ateliers périscolaires",
      content: "",
      link: "/services/#after-school-workshops",
    },
  ]);

  const [ourStrengths] = useState([
    {
      title: "Promouvoir les producteurs locaux et responsables",
      content:
        "faire la part belle aux circuits courts, pour partager ensemble des produits de qualité, faire vivre le commerce local et contribuer ainsi à la vitalité de notre territoire.",
    },
    {
      title: "Apporter des réponses nouvelles au territoire",
      content:
        "en proposant exclusivement des nouveaux services, non concurrentiels, pouvant générer des emplois à la hauteur des besoins. Nos prestations répondent à des besoins locaux non satisfaits, mais non développés car, souvent, insuffisamment rentables pour l'économie classique.",
    },
    {
      title:
        "Favoriser une entreprise de l'économie sociale et solidaire innovante ",
      content:
        "qui met au cœur de son projet la qualité de l'environnement de travail pour ses collaborateurs : contrats exclusivement en CDI, temps de travail choisi par les salariés, coopérative SCIC, activités adaptées aux compétences, management inclusif et accompagnement social des collaborateurs.",
    },
    {
      title: "Participer à la résorption du chômage ",
      content:
        "de longue durée au Teil en considérant que personne n'est inemployable du moment où l'entreprise s'adapte aux contraintes des salariés, créer des activités en fonction des compétences de nos salariés et non l’inverse, faire vivre les valeurs portés par ATD Quart Monde et l'expérimentation Territoire Zéro Chômeur de Longue Durée.",
    },
  ]);
  const [someNumbers] = useState([
    {
      pct: "",
      title: <Counter end="37" duration="1" delay="0" />,

      content: "salarié.e.s",
    },

    {
      pct: "",
      // title: <Counter end="400" duration="2" delay="0" />,
      title: <Counter end="400" duration="1" delay="0" />,

      content: "jeux de société",
      link: "+ d'infos",
    },
    {
      pct: "",
      title: <Counter end="30" duration="1" delay="0" />,
      content: "soirées évènements par an",
      link: "+ d'infos",
    },
    {
      pct: "",
      title: <Counter end="55" duration="1" delay="0" />,
      content: "partenaires",
      link: "+ d'infos",
    },
    {
      pct: "",
      title: <Counter end="337" duration="1" delay="0" />,
      content: "abonnés au LOL",
      link: "+ d'infos",
    },
    {
      pct: "",
      title: <Counter end="40" duration="1" delay="0" />,
      content: "guinguettes par an",
      link: "+ d'infos",
    },
    {
      pct: "",
      title: <Counter end="324" duration="1" delay="0" />,
      content: "ateliers périscolaires",
      link: "+ d'infos",
    },
  ]);

  return (
    <>
      <div
      // ref={boxRef}
      >
        <span id="banner"> </span>
        <div className="pt-0" id="home"></div>

        <div>
          <ResponsiveBanner
            bannerXL="/images/bannieres/visuel-accueil-xl.jpg"
            bannerLG="/images/bannieres/visuel-accueil-lg.jpg"
            bannerMD="/images/bannieres/visuel-accueil-md.jpg"
            bannerSM="/images/bannieres/visuel-accueil-sm.jpg"
            bannerXS="/images/bannieres/visuel-accueil-xs.jpg"
          />
        </div>

        <div id="" className="pt-5 mb-5"></div>

        <div id="titre1" className="container-fluid">
          <div className="pt-0">
            {/* <div className="text-start text-light">
            <TitleOne l1="Déclic" l2="et des Claps" />
          </div> */}

            <div
              // ref={textRef}
              className="mt-0 text-center text-light"
            >
              <div className="row">
                <div
                  // style={{ marginTop: "15vh" }}
                  className="decal-left order-1  col-md-12 align-self-start  col-xl-6"
                >
                  <TitleTwo txt="Qui sommes-nous ?" />
                  <h3
                    className={`pt-2 Texte1 text-center px-lg-4       
            ${theme ? `text-light` : `text-dark`}`}
                  >
                    Une {/* <strong> */}
                    entreprise de l’économie sociale <br />
                    et solidaire {/* </strong> */}
                    qui vient en soutien <br /> à la vie évènementielle, <br />
                    culturelle et associative <br />
                    du territoire !
                  </h3>
                </div>

                <div className="decal-right order-3  col-md-12 align-self-start  col-xl-6">
                  <TitleTwo txt="Nos spécialités" />
                  <h3
                    className={`pt-2 Texte1 text-center px-lg-4     
            ${theme ? `text-light` : `text-dark`}`}
                  >
                    Jeux
                    <br />
                    Animations
                    <br />
                    Logistique évènementielle
                    <br />
                    Diffusion / Tractage
                    <br />
                    Conciergerie de gîtes
                  </h3>
                </div>
              </div>
            </div>

            <div
              className={`row  px-5   
            ${theme ? `text-light` : `text-dark`}`}
            >
              {/* Service */}
              <div
                // ref={serviceRef}
                className="mt-5 col-12"
              >
                <div>
                  <TitleTwo txt="Nos offres de service" />
                </div>

                <h5 className="pt-2 Texte1 text-start"> </h5>
                <div className="row align-items-justify justify-content-center">
                  {ourServices.map((ourService) => {
                    return (
                      <Carte
                        key={uuidv4()}
                        pct={ourService.pct}
                        title={ourService.title}
                        content={ourService.content}
                        link={ourService.link}
                      />
                    );
                  })}
                </div>
              </div>
              {/* Fin service */}
              {/* Rendez-vous */}
              <div className="col-12">
                <TitleTwo txt="Nos prochains rendez-vous" />

                <div className="row align-items-justify justify-content-center">
                  {NEXTDATES.map((nextDate) => {
                    return (
                      <Carte
                        key={uuidv4()}
                        pct={nextDate.pct}
                        link={nextDate.link}
                      />
                    );
                  })}
                </div>
                <div className="col-12 mt-2 col-md-9 mt-md-4 mx-auto">
                  <CarteInfos
                    title="Plus d'informations"
                    text="Réservation conseillée"
                    phone="06 58 23 03 26"
                    email="accueil@declicetdesclaps.fr"
                    link="/contact/#write"
                    textbutton="Ecrivez-nous"
                  />
                </div>
              </div>
              {/* fin Rendez-vous */}
              {/* DEDC c'est aussi */}
              <div className="col-12 mt-5">
                <TitleTwo txt="Déclic et des Claps c'est aussi…" />
                <div className="mt-3 mx-0">
                  <div className="row align-items-justify justify-content-center">
                    {ourStrengths.map((ourStrength) => {
                      return (
                        <CarteForces
                          key={uuidv4()}
                          pct={ourStrength.pct}
                          title={ourStrength.title}
                          content={ourStrength.content}
                          link={ourStrength.link}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Fin DEDC c'est aussi */}

              {/* DEDC en chiffres */}
              <div className="col-12 mt-5">
                <TitleTwo txt="Déclic et des Claps en quelques chiffres" />
                <div className="row  align-items-justify justify-content-center">
                  {someNumbers.map((someNumber) => {
                    return (
                      <CarteNombres
                        key={uuidv4()}
                        pct={someNumber.pct}
                        title={someNumber.title}
                        content={someNumber.content}
                      />
                    );
                  })}
                </div>
              </div>
              {/* Fin DEDC en chiffres*/}
            </div>
          </div>
        </div>
        <div className="mb-5 pb-5"></div>
      </div>
    </>
  );
};

export default Welcome;
