import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import InfosDetails from "./InfosDetails";
import TitleOne from "../elements/Titles/TitleOne";

const Infos = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="bevalues" className="pt-5"></div>
      <div id="titre1" className="container-fluid  ">
        <div className="row pt-0">
          <div className=" col text-start text-light">
            <TitleOne l1="Informations" l2="légales" />
          </div>
        </div>
      </div>
      <div className="container pt-5 rounded-1">
        <div
          className={`
            ${theme ? `text-light` : `text-dark`}`}
        >
          <h4 className="pt-4  text-uppercase text-start">
            <span className="Titre2 ext-start px-2">
              Le présent site est la propriété{" "}
            </span>{" "}
            <br /> <span className="Titre2 px-2">de Déclic et des Claps</span>
          </h4>
          <InfosDetails />
        </div>
      </div>
      <div className="mb-5 pb-5"></div>{" "}
    </>
  );
};

export default Infos;
