import React, { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { HashLink as Link } from "react-router-hash-link";

import ORG from "../../../img/about/2026-04-20-Organigramme.svg";
import PctRaisonEtre from "../../../img/raison-d-etre.jpg";
import Team from "../../../img/about/team-vallon-pont-arc-crop.jpg";
import Picture from "../../elements/Picture";
import TitleTwo from "../../elements/Titles/TitleTwo";
import { FaFilePdf } from "react-icons/fa";

import LC from "../../../img/commissionEbe/Laurent-CONSIGNY.jpg";
import SL from "../../../img/commissionEbe/Stephane LECAILLE.jpg";
import AC from "../../../img/commissionEbe/Alexandre COVELLI.jpg";
import CB from "../../../img/commissionEbe/Cecile BAYLE.jpg";
import RA2025 from "../../../img/about/2025-couv-rapport-activités-web.jpg";
import RA2024 from "../../../img/about/2024-couv-rapport-activités-web.jpg";
import RA2023 from "../../../img/about/2023-couv-rapport-activités-web.jpg";

const AboutExperiment = () => {
  const { theme } = useContext(ThemeContext);
  const title = "à";
  const titleUpper = title.toUpperCase();
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onWheel = (event) => {
      event.preventDefault();
    };

    const onMouseEnter = () => {
      document.addEventListener("wheel", onWheel, { passive: false });
    };

    const onMouseLeave = () => {
      document.removeEventListener("wheel", onWheel);
    };

    iframe.addEventListener("mouseenter", onMouseEnter);
    iframe.addEventListener("mouseleave", onMouseLeave);

    return () => {
      iframe.removeEventListener("mouseenter", onMouseEnter);
      iframe.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <>
      <div className="container-fluid pt-5 rounded-1">
        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          <TitleTwo txt={titleUpper + " propos"} />

          <div className="row mt-4">
            <div className="col-12 col-lg-6 ">
              <Picture classe="img-fluid rounded-5" pct={Team} alt="équipe" />
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="pt-2 Texte1 text-start">
                <strong>
                  L’Entreprise à But d’Emploi (EBE) Déclic et des Claps est née,
                  en juin 2023, d’une expérimentation nationale Territoire zéro
                  chômeur de longue durée.
                </strong>
              </h2>
              <p className="pt-2 lh-1 Texte1 text-start">
                Ce projet utopique qui prend vie est porté depuis plus de 30 ans
                par ATD Quart Monde et a un objectif simple : éradiquer le
                chômage de longue durée, partant du constat que personne n’est
                inemployable.
              </p>

              <h5 className="pt-2 Texte1 text-start">
                Ainsi, Déclic et des Claps propose un CDI à toutes les personnes
                habitant.es du Teil, privées durablement d’emploi et volontaires
                pour s’engager dans cette expérimentation. Notre entreprise
                embauchera d’ici à 2025, 36 salariés, tous anciens chômeur.ses
                de longue durée.
                <br />
                <br />
                Nous appartenons à l’économie sociale et solidaire et nous avons
                pour missions de créer des activités nouvelles, non
                concurrentielles, pouvant générer des emplois à la hauteur des
                besoins de la population sur le territoire du Teil. Les
                prestations que nous proposons répondent à des besoins locaux
                non satisfaits, mais non développés car insuffisamment
                rentables. L’originalité de cette expérimentation est également
                que nous créons des activités en fonction des compétences de nos
                salariés et non l’inverse.
                <br />
                <br />
                Nous sommes, par ailleurs, très fiers d&#39;être unique dans le
                paysage des EBE en France en venant en soutien à la vie
                événementielle, culturelle et associative du territoire. En plus
                de produire des emplois de qualité qui nous permettent de
                développer nos compétences, de vivre dignement et de contribuer
                à notre bien-être, nous participons pleinement à l’animation du
                territoire et au maintien du lien social en investissant
                l’espace public.
                <br />
                <br />
                Faire appel aux services de Déclic et des Claps, c’est donc tout
                à la fois soutenir un projet culturel et social innovant.
                <br />
                <br />
                <strong>Bienvenue !</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5 rounded-1">
          <TitleTwo txt="Historique" />
          <div className="row pt-3">
            <div className="col-12 col-lg-8">
              <h2 className="pt-2 text-start">
                <strong>
                  Implanté au Teil, en Ardèche, Déclic et des Claps <br /> est
                  la 2<sup>ème </sup>
                  Entreprise à But d’Emploi de la commune.
                </strong>
              </h2>
              <p className="pt-2 lh-1 Texte1 text-start">
                Dès la création de la 1<sup>ère </sup> EBE en 2022 &nbsp;
                <Link to="https://www.activiteil.fr/" target="blank">
                  <button type="button" className="btn btn-lg background-infos">
                    Activiteil
                  </button>
                </Link>
                &nbsp; la Mairie du Teil, <br /> à l’initiative du projet
                Territoire Zéro Chômeur sur le territoire, a lancé la réflexion{" "}
                <br />
                d’une 2<sup>e </sup>
                entreprise pour accélérer l&#39;embauche de l’ensemble <br />{" "}
                des chômeur.se.s de longue durée de la commune.
              </p>

              <h5 className="pt-2 Texte1 text-start">
                <div className="row">
                  <div className="col-8 mb-3 text-justify">
                    Après plusieurs mois de préfiguration des activités et du
                    modèle économique, Déclic et des Claps est né en juin 2023
                    et s’est appuyé sur le formidable travail réalisé par
                    l’association The Teil To Be et son initiateur, Olivier Rey,
                    pour développer ses activités et notamment le LOL, le bar à
                    jeux du Teil créé en 2020.
                  </div>
                  <div className="col-4 text-justify"></div>
                  <div className="col-8">
                    Dès le départ, Déclic et des Claps s’est positionné en
                    soutien à la vie associative, culturel et événementiel du
                    territoire et en complément de l’offre de service
                    d’ActiviTeil principalement basé sur la production de biens
                    (couture, cuisine du monde, bricolage, maraîchage, etc.).
                  </div>
                </div>
              </h5>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
              <Picture
                classe="w-75 rounded-5"
                pct={PctRaisonEtre}
                alt="Visuel de la Raison d'être"
              />
            </div>
          </div>
        </div>
        <div className="container px- pt-5 rounded-1">
          <TitleTwo txt="Conseil d'administration" />
          <div className="row mt-5">
            <div className="col-12 mb-5">
              <h2 className="pt-2 Texte1 text-center">
                <strong>
                  Un grand merci à nos administrateurs bénévoles qui se
                  réunissent tous les mois, pour accompagner le pilotage et la
                  stratégie de Déclic et des Claps.
                </strong>
              </h2>
            </div>

            <div className="col-12 col-md-10 mx-auto p-4 border border-success rounded-2">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-4">
                  <div style={{ width: "160px" }} className="ratio ratio-1x1">
                    <Picture
                      classe="rounded-circle"
                      pct={LC}
                      alt="Photo de Laurent CONSIGNY - Président"
                    />
                  </div>
                  <h5 className="pt-3 text-center">
                    Laurent CONSIGNY - Président
                  </h5>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-4">
                  <div style={{ width: "160px" }} className="ratio ratio-1x1">
                    <Picture
                      classe="rounded-circle"
                      pct={SL}
                      alt="Photo de Stéphane LECAILLE - Trésorier"
                    />
                  </div>
                  <h5 className="pt-3 text-center">
                    Stéphane LECAILLE - Trésorier
                  </h5>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-4">
                  <div style={{ width: "160px" }} className="ratio ratio-1x1">
                    <Picture
                      classe="rounded-circle"
                      pct={CB}
                      alt="Photo de Cécile BAYLE - Administratrice"
                    />
                  </div>
                  <h5 className="pt-3 text-center">
                    Cécile BAYLE - Administratrice
                  </h5>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-4">
                  <div style={{ width: "160px" }} className="ratio ratio-1x1">
                    <Picture
                      classe="rounded-circle"
                      pct={AC}
                      alt="Photo de Alexandre COVELLI - Administrateur"
                    />
                  </div>
                  <h5 className="pt-3 text-center">
                    Alexandre COVELLI - Administrateur
                  </h5>
                </div>
              </div>
            </div>

            <TitleTwo txt="Organigramme" />
            <img
              style={{ borderRadius: "5%", width: "70%", height: "60%" }}
              className={`mx-auto  mt-3 nav-style-white`}
              src={ORG}
              alt="Organnigramme"
            />
          </div>
        </div>
        <div className="container-fluid p-5 rounded-1">
          <TitleTwo txt="Rapports d'activité" />
          <h5 className="pt-2 Texte1 text-start"></h5>

          <div className="row justify-content-center align-items-stretch g-2">
            <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex">
              <a
                href="https://www.calameo.com/read/00775604371d3c5e4ad4c"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 text-decoration-none"
              >
                <button
                  type="button"
                  className={`btn btn-lg fw-bold w-100 h-100 d-flex flex-column  ${
                    theme
                      ? `nav-style-black btn-outline-light`
                      : `nav-style-white btn-outline-dark`
                  }`}
                >
                  <div className="text-center">
                    <FaFilePdf className="pdf-icon mb-1" />
                    2025
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-grow-1"
                    style={{ minHeight: "180px" }}
                  >
                    <img
                      src={RA2025}
                      alt="preview 2023"
                      className="img-fluid"
                      style={{ maxHeight: "100%", objectFit: "contain" }}
                    />
                  </div>
                </button>
              </a>
            </div>
            <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex">
              <a
                href="/medias/RA_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 text-decoration-none"
              >
                <button
                  type="button"
                  className={`btn btn-lg fw-bold w-100 h-100 d-flex flex-column  ${
                    theme
                      ? `nav-style-black btn-outline-light`
                      : `nav-style-white btn-outline-dark`
                  }`}
                >
                  <div className="text-center">
                    <FaFilePdf className="pdf-icon  mb-1" />
                    2024
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-grow-1"
                    style={{ minHeight: "180px" }}
                  >
                    <img
                      src={RA2024}
                      alt="preview 2024"
                      className="img-fluid"
                      style={{ maxHeight: "100%", objectFit: "contain" }}
                    />
                  </div>
                </button>
              </a>
            </div>

            <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex">
              <a
                href="https://www.calameo.com/read/007756043b3fa32925d4f"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 text-decoration-none"
              >
                <button
                  type="button"
                  className={`btn btn-lg fw-bold w-100 h-100 d-flex flex-column  ${
                    theme
                      ? `nav-style-black btn-outline-light`
                      : `nav-style-white btn-outline-dark`
                  }`}
                >
                  <div className="text-center">
                    <FaFilePdf className="pdf-icon mb-1" />
                    2023
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-grow-1"
                    style={{ minHeight: "180px" }}
                  >
                    <img
                      src={RA2023}
                      alt="preview 2023"
                      className="img-fluid"
                      style={{ maxHeight: "100%", objectFit: "contain" }}
                    />
                  </div>
                </button>
              </a>
            </div>
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <div style={{ margin: "8px 0px 4px" }}>
              <a
                href="https://www.calameo.com/books/007756043b3fa32925d4f"
                target="_blank"
              >
                Rapport Activités Dedc 2023
              </a>
            </div>
          </div> */}
          {/* <iframe
            ref={iframeRef}
            src="//v.calameo.com/?bkcode=007756043b3fa32925d4f"
            width="90%"
            height="900"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            allowFullScreen
            style={{ margin: "0 auto" }}
          ></iframe> */}
          {/* <div style={{ margin: "4px 0px 8px" }}>
            <a href="http://www.calameo.com/">Publish at Calameo</a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutExperiment;
