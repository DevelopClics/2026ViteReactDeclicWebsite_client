import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import px from "../../../img/px.svg";

import dash from "../../../img/dash.svg"; // Trivial change to force re-evaluation
// import dash2 from "../../../img/dash2.svg";
import "../../../App.css";

const TitleTwo = ({ txt, subtxt }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      <div className="pt-5">
        {/* <img src={dash} className="Tiret2" alt="dash" /> */}

        <img
          src={px}
          className={`${theme ? `Tiret-ht-dark` : `Tiret-ht-light`}`}
          alt="dash"
        />

        <h4
          className="text-light text-center"
        >
          <span
            className={`Titre2 ${theme ? `Titre2-dark` : `Titre2-light`}`}
            // className="Titre2 rounded-2 px-3"
          >
            {txt}
          </span>
          <br />
          <span
            className={`Titre2-sub ${theme ? `Titre2-dark` : `Titre2-light`}`}
            // className="Titre2 rounded-2 px-3"
          >
            {subtxt}
          </span>
        </h4>

        <img
          src={px}
          className={`${theme ? `Tiret-bs-dark` : `Tiret-bs-light`}`}
          alt="dash"
        />
      </div>
    </>
  );
};

export default TitleTwo;
