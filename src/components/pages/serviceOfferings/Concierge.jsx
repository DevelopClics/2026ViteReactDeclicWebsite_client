import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./ServiceOffering.css";
import LogoBienvenue from "../../../img/logo-bienvenue-conciergerie.png";
import CarteConcierge from "../../elements/cards/CardConcierge";
import CarteInfos from "../../elements/cards/CardInfos";
import CONCIERGE from "../../datas/conciergeDatas.json";
import Picture from "../../elements/Picture";
import Quote from "../../elements/Quote";
// import { Button } from "react-bootstrap";

const Concierge = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* <div id="bienvenue" className="pt-5"></div> */}
      <div className="container-fluid">
        <div className="container pt-0 pt-md-5 rounded-1">
          <div className="row">
            <div
              className={`order-2 order-md-1 col-12 col-md-8
            ${theme ? `text-light` : `text-dark`}`}
            >
              {/* <TitleTwo txt="Titre 1" /> */}
              <h2 className="pt-2  text-start">
                Vous n’avez pas le temps de vous occuper de votre gîte, de le
                nettoyer ou d’accueillir vos voyageurs ? <br />
              </h2>
              <p className="pt-2 Texte1 text-start">
                Déchargez-vous de la logistique, on vous allège !
              </p>
              <h5 className="pt-2 mt-2 Texte1 text-start">
                Basé au Teil, en Ardèche, Bienvenue Conciergerie, créé en
                partenariat avec l’entreprise teilloise Rebond, intervient sur
                un rayon de 25 km (de Baix à Villeneuve-de-Berg à Viviers) :
                <ul>
                  <li className="conc">Ménage,</li>
                  <li className="conc">
                    Entretien des locaux et des extérieurs,
                  </li>
                  <li className="conc">Gestion des clés,</li>
                  <li className="conc">Inventaires de sortie,</li>
                  <li className="conc">Conseils touristiques…</li>
                </ul>
                {/* <span style={{ color: "red" }}>
                  Reprendre l’onglet (les 5 visuels et les textes de la rubrique
                  NOS SERVICES du site Internet de
                  www.bienvenue-conciergerie.fr) Mettre le logo de la
                  conciergerie{" "}
                </span>{" "} */}
              </h5>
            </div>

            <div className="order-1 order-md-2 col-12 col-md-4 text-middle text-light">
              <Picture
                classe="w-100"
                pct={LogoBienvenue}
                alt="Logo Bienvenue Service Conciergerie"
              />
            </div>
          </div>
        </div>

        <div className="mt-1 mt-lg-5 row align-items-justify justify-content-center">
          {CONCIERGE.map((item) => {
            return (
              <CarteConcierge
                key={item.id}
                pct={item.pct}
                title={item.title}
                line1={item.line1}
                line2={item.line2}
                line3={item.line3}
                line4={item.line4}
              />
            );
          })}
        </div>
      </div>
      <br />

      <div className="container">
        {/* <TitleTwo txt="Titre 2" /> */}

        <h5 className="pt-2  Texte1 text-start">
          <Quote
            line1="Depuis un an, nous faisons appel aux employées de Déclic et Des
            Claps pour assurer le nettoyage de nos locaux du Mett au Teil."
            line2="Nous
            apprécions la qualité et la méticulosité du travail réalisé mais
            également l’amabilité, la disponibilité et la réactivité de tout le
            personnel."
            line3=" Nous recommandons Déclic et des Claps !"
            // line4=""
            // line5=" "
            sign="Lisanne LAGOURGUE - Administratrice du Mett (Atelier de la marionnette)"
          />
          <br />
          <br />
          {/* <h2>
            <strong>
              <u>Plus d’informations</u> :
            </strong>
          </h2> */}
          {/* <Button
            className="mt-1"
            variant="success"
            href="https://www.bienvenue-conciergerie.fr/"
            target="blank"
          >
        
            Visiter Bienvenue ! Conciergerie
       
          </Button> */}
          {/* <br /> <br /> 06 58 22 87 88 - accueil@bienvenue-conciergerie.fr{" "}
          <br />
          Déplacement et devis gratuit sur mesure */}
        </h5>
      </div>
      <div className="col-12 col-lg-8 mx-auto">
        <CarteInfos
          title="Plus d'informations"
          text="Devis gratuit sur mesure"
          phone="06 58 22 87 88"
          email="accueil@bienvenue-conciergerie.fr"
          link="https://www.bienvenue-conciergerie.fr/#accueil"
          textbutton="Visitez Bienvenue ! Conciergerie"
        />
      </div>
    </>
  );
};

export default Concierge;
