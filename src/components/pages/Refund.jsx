import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import TitleOne from "../elements/Titles/TitleOne";
import TitleTwo from "../elements/Titles/TitleTwo";
import VideoPlayer from "../elements/VideoPlayer";
import Btn from "../elements/buttons/Btn";

const Refund = () => {
  const { theme } = useContext(ThemeContext);
  const mapLOL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.3691072972101!2d4.686006357012637!3d44.55103119922754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b514f587cbb35d%3A0x7b0c63bfb20df57!2s6%20Rue%20du%2011%20Novembre%201918%2C%2007400%20Le%20Teil!5e0!3m2!1sfr!2sfr!4v1736411389389!5m2!1sfr!2sfr";

  return (
    <>
      <div className="container-fluid">
        <div
          id="lol"
          className="container-fluid titre-container pt-1 mb-5"
          style={{ scrollMarginTop: "150px" }}
        ></div>
        <TitleTwo txt="Nouvelle guinguette : la cagnotte est en ligne !" />
        <div
          className={`row mx-0 mx-lg-5 px-0 px-lg-5 mt-5
            ${theme ? `text-light` : `text-dark`}`}
        >
          <div className="row">
            {/* COL 1 */}
            <div className="col-12  col-xl-3 pt-0 Texte1 text-start">
              <h5>
                Notre guinguette-mobile qui sillonnait les routes de Drôme et
                d’Ardèche a pris feu en mai dernier. Les indemnités de
                l'assurance ne nous permettent pas à ce jour d'investir dans une
                vraie guinguette fonctionnelle, prête à vous accueillir pour
                vous désaltérer, vous régaler, et surtout vous faire passer un
                moment joyeux et convivial !
                <br />
                <br />
                <strong>Nous lançons donc notre campagne de collecte </strong>
                "Embarquez à bord de notre nouvelle guinguette-mobile" avec
                Ulule ! Alors prêt à cliquer, à diffuser...
                <br /> <br />
                5, 10, 20, 100€ ou plus, tous les dons sont les bienvenus pour
                faire revivre ce lieu de convivialité !
                <br />
                Particuliers ou entreprises vos dons sont défiscalisables !
              </h5>
            </div>

            <div className="col-12  col-xl-9 pt-0 Texte1 text-start">
              <VideoPlayer video="gJlOMVqEGcg" />
              <Btn />
            </div>
            {/* LOGO LOL */}
            <div className="col-12 col-md-3"></div>
          </div>
        </div>

        <div className="container"></div>
      </div>
      <div className="container-fluid mb-5 mx-0 mx-lg-5 px-lg-5"></div>
    </>
  );
};

export default Refund;
