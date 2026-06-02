import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import VERBATIM from "../../datas/verbatimDatas.json";
import TitleTwo from "../../elements/Titles/TitleTwo";

const AboutDedc = () => {
  const { theme } = useContext(ThemeContext);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <div className="container-fluid pt-5 px-0 px-lg-5">
        <div className="text-dark">
          <TitleTwo txt="Verba-team" />

          <div className="row g-0">
            {VERBATIM.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-12 col-md-6 col-lg-3 col-xl-3 pt-lg-0 align-self-center"
                >
                  <h5 className="mb-0">
                    <div
                      className="Texte2 vertical text-center p-5 d-flex flex-column justify-content-center"
                      style={{ backgroundColor: item.backgroundcolor }}
                    >
                      <strong>
                        {" "}
                        {capitalizeFirstLetter(item.verb).replace(
                          " !",
                          "\u00A0!",
                        )}{" "}
                      </strong>
                    </div>
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDedc;
