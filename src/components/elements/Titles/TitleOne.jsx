import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "../../../App.css";
import dash from "../../../img/dash.svg";

const TitleOne = ({ l1, l2, l3 }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="ms-1 ps-1 ms-sm-3 ps-sm-3 ms-md-5 ps-md-5">
        <img src={dash} className="Tiret" alt="dash" />
        <div className="ms-2 py-3">
          {/* color: #3f245d; */}
          <h1>
            <span
              className={`Titre1 ${theme ? `l1-style-dark` : `l1-style-light`}`}
            >
              {l1}
            </span>
            <br />
            <span
              className={`Titre1 ${
                theme ? `lplus-style-dark` : `lplus-style-light`
              }`}
            >
              {l2}
            </span>
            <br />
            <span
              className={`Titre1 ${
                theme ? `lplus-style-dark` : `lplus-style-light`
              }`}
            >
              {" "}
              {l3}
            </span>
          </h1>
        </div>
        <img src={dash} className="Tiret" alt="dash" />
      </div>
    </>
  );
};

export default TitleOne;
