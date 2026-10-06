import React from "react";
import IMAGE from "../../img/horaires-avril.svg";

const TimeTable = () => {
  return (
    <>
      <h2 className="pt-2 text-start">
        <strong>
          <u>Horaires d’Automne-Hiver</u> :
        </strong>{" "}
      </h2>
      <div className="row">
        {/* <div className="col-12"> */}
        <h5 className="bal col-12 col-lg-6 pt-0 Texte1 text-start">
          <ul>
            <li className="puce-lol">
              <strong style={{ textTransform: "uppercase" }}>
                Hors vacances
              </strong>
            </li>
            <br />
            <strong>Mercredi</strong> 14h ⇨ 23h
            <br />
            <strong>Jeudi</strong> 16h ⇨ 23h
            <br />
            <strong>Vendredi</strong> 16h ⇨ 23h
            <br />
            <strong>Samedi</strong> 14h ⇨ 23h
            <br />
            <strong>Dimanche</strong> 14h ⇨ 21h
            <br /> <br />
          </ul>
        </h5>
        <h5 className="bal col-12 col-lg-6 pt-0 Texte1 text-start">
          <ul>
            <li className="puce-lol">
              <strong style={{ textTransform: "uppercase" }}>
                Vacances scolaires
              </strong>
            </li>
            <br />
            <strong>Mercredi</strong> 14h ⇨ 23h
            <br />
            <strong>Jeudi</strong> 14h ⇨ 23h
            <br />
            <strong>Vendredi</strong> 14h ⇨ 23h
            <br />
            <strong>Samedi</strong> 14h ⇨ 23h
            <br />
            <strong>Dimanche</strong> 14h ⇨ 21h
            <br /> <br />
          </ul>
        </h5>
        {/* </div> */}
      </div>
    </>
  );
};

export default TimeTable;
