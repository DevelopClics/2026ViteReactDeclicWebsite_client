import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Partners from "../Partners";
import Customers from "../Customers";
import TitleOne from "../../elements/Titles/TitleOne";
import TitleTwo from "../../elements/Titles/TitleTwo";
import Joins from "../Joins";
import logo from "../../../../public/images/clients/2024.04.30-BANDEAU-LOGOS.jpeg";

const Ourpartners = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="pt-5" id="banner"></div>
      <div id="after-schƒool-workshops" className="pt-5"></div>
      <div id="titre1" className="container-fluid  ">
        <div className="pt-0">
          <div className=" col text-start text-light">
            {/* <TitleOne l1="Nos partenaires" l2="et clients" /> */}
          </div>
        </div>
      </div>

      <div className="decal-left container rounded-1">
        <div
          className={`
              ${theme ? `text-light` : `text-dark`}`}
        >
          <TitleTwo txt="Nos partenaires institutionnels" />
          <p className="pt-2 lh-1 Texte1 text-start">
            Déclic et des Claps existe grâce au soutien de nos précieux
            partenaires. <br /> Un grand merci à eux !
          </p>
          <div id="customers"></div>
          <a href="https://www.auvergnerhonealpes.fr/" target="blank">
            <img
              src={logo}
              className="py-4 img-fluid"
              alt="logos Leader Ardèche - La Région Auvergne-Rhône-Alpes - Cofinancé par l'Union européenne"
            />
          </a>
          <Partners />
          <TitleTwo txt="Nos clients" />
          {/* <h5 className="pt-2 Texte1 text-start"> */}
          <p className="pt-2 lh-1 Texte1 text-start">
            Ils nous font confiance pour répondre à leurs besoins. <br></br>{" "}
            Déclic et des Claps compte de nombreux clients parmi les
            entreprises, collectivités et associations sur le territoire. Merci
            pour leur confiance !
          </p>
          <Customers />
          <TitleTwo txt="Nous les avons rejoints" />
          {/* <p className="pt-2 Texte1 text-start">
            Déclic et des Claps a rejoint les Emerveillés de l’Ardèche, Cap Le
            Teil et Arcade, La Montilienne. (mettre les logos + les renvoie sur
            leur page Internet)
          </p> */}
          <Joins />
        </div>
      </div>
    </>
  );
};

export default Ourpartners;
