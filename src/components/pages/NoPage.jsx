import React, { useContext } from "react";
import "./NoPage.css";
import { ThemeContext } from "../../context/ThemeContext";

import { Link } from "react-router-dom";
import err from "../../img/404.svg";

const NoPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="mt-5 container  pt-6 rounded-1">
        <div className="row mt-4">
          <div className="col-12 col-lg-5">
            <h2 className="pt-2 Texte1 text-start">
              <strong>
                Erreur <br />
                404
              </strong>
            </h2>
            <p className="pt-2 lh-1 Texte1 text-start">
              Oups !<br />
              <br />
              Quelque-chose ne s'est pas déroulé comme prévu et vous venez de
              vous égarer dans les méandres du labyrinthe du site Internet de
              Déclic et des Claps.
            </p>

            <h5 className="pt-2 Texte1 text-start">
              Tout va bien ! <br /> Nous vous proposons de suivre le fil qui
              vous reconduira à l'accueil.
            </h5>
            <Link to="/#home">
              <button
                type="button"
                className={`btn btn-sm fw-bold
                        ${theme ? `btn-outline-light` : `btn-outline-dark`}
                        `}
              >
                Revenir à l'Accueil
              </button>
            </Link>
          </div>
          <div className="col-12 col-lg-6 ">
            <img className="w-100 img-fluid" src={err} alt="erreur 404" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
