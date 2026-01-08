import React, { useContext } from "react";
import "../../../App.css";

const TitleThree = ({ txt }) => {
  return (
    <>
      <h4 className="col text-light text-uppercase text-center">
        <span className="Titre3 rounded-2 px-2">{txt}</span>
      </h4>
    </>
  );
};

export default TitleThree;
