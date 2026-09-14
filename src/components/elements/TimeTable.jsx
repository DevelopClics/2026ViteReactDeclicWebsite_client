import React from "react";
import IMAGE from "../../img/horaires-avril.svg";

const TimeTable = () => {
  return (
    <>
      <h2 className="pt-2 text-start">
        <strong>
          <u>Horaires d’ouverture</u> :
        </strong>{" "}
      </h2>
      <div className="row">
        <div className="col-12 col-xl-6">
          {/* <h5 className="bal col-12 pt-0 Texte1 text-start">
            <ul>
              <li className="puce-lol">
                <strong>SEPTEMBRE</strong>
              </li>
              <br />
              <strong>Mercredi & samedi</strong>
              <br />
              14h ⇨ 23h
              <br />
              <strong>Jeudi & vendredi</strong>
              <br />
              17h ⇨ 23h
              <br />
              <strong>Dimanche</strong>
              <br /> 12h ⇨ 20h
              <br /> <br />
              <strong>
                + Pause café <br />
                du mardi au vendredi
              </strong>
              <br />
              12h ⇨ 14h
            </ul>
          </h5> */}
          <h5 className="bal col-12 pt-0 Texte1 text-start">
            <ul>
              <li className="puce-lol">
                <strong style={{ textTransform: "uppercase" }}>été 2026</strong>
              </li>
              <br />
              Du <strong>mercredi au dimanche</strong> <br />
              de
              <strong> 16h</strong> à <strong>23h</strong>
              {/* <strong>Mercredi & samedi</strong> 14h ⇨ 23h
              <br />
              <strong>Jeudi & vendredi</strong> 17h ⇨ 23h
              <br />
              <strong>Dimanche</strong> 12h ⇨ 17h */}
              <br />
            </ul>
          </h5>
        </div>

        {/* <div className="col-12 col-xl-6">
          <h5 className="bal col-12 pt-0 Texte1 text-start">
            <ul>
              <li className="puce-lol">
                <strong>OCTOBRE</strong>
              </li>
              <br />
              <strong>VACANCES</strong>
              <br />
              <strong>Mercredi</strong>
              <br /> 14h ⇨ 23h
              <br />
              <strong>Dimanche</strong>
              <br /> 12h ⇨ 17h
              <br />
              <br />
              <strong>HORS VACANCES</strong>
              <br />
              <strong>Mercredi & samedi</strong>
              <br />
              14h ⇨ 23h
              <br />
              <strong>Jeudi & vendredi</strong>
              <br />
              17h ⇨ 23h
              <br />
              <strong>Dimanche</strong>
              <br /> 12h ⇨ 17h
            </ul>
          </h5>
        </div> */}
      </div>
    </>
  );
};

export default TimeTable;
