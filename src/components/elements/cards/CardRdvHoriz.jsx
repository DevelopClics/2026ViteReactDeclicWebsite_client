import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Card from "react-bootstrap/Card"; // Trivial change to force re-evaluation
import CarteInfos from "./CardInfos";
import { Link } from "react-router-dom";

const CarteRdvHoriz = ({
  id,
  pct,
  title,
  place,
  day,
  date,
  hours,
  content1,
  content2,
  content3,
  content4,
  content5,
  subcontent1,
  subcontent2,
  subcontent3,
  subcontent4,
  subcontent5,
  resa,
  cost,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <span id={id}></span>
      <Card
        className={` 
        rounded-4 col-12 m-sm-3 p-3 
        ${theme ? `nav-style-black text-light` : `nav-style-white`}
        `}
      >
        <div>
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img
                className="img-fluid rounded-start border border-warning"
                variant="top"
                src={pct}
              />
              {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
            </div>
            <div className="col-md-7 d-flex flex-column">
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>{title}</strong>
                  </h1>
                  <h3>
                    <strong>{place}</strong> le {day}{" "}
                    <strong>
                      {date} {hours}
                    </strong>
                    <br />
                  </h3>

                  <p>
                    {content1}
                    <br />
                    {content2}
                    <br />
                    {content3}
                    <br />
                    {content4}
                    <br />
                    {content5}
                  </p>
                  <p>{subcontent1}</p>
                  <p>
                    <strong>{subcontent2}</strong>
                  </p>
                  <p>{subcontent3}</p>
                  {id === "17" && (
                    <Link to={resa} target="blank">
                      <button
                        type="button"
                        className="btn btn-lg background-infos"
                      >
                        Reservation en ligne
                      </button>
                    </Link>
                  )}

                  <br />
                  <p>{subcontent4}</p>
                  <p>{subcontent5}</p>

                  {/* <p>
                    <strong>{resa}</strong>
                    <br />
                    <strong>{cost}</strong>
                  </p> */}
                </Card.Title>
                {/* <div className="col-8 text-center"></div> */}
              </Card.Body>
              <div className="ms-3">
                <CarteInfos
                  title="Plus d'informations"
                  text="Réservation conseillée"
                  phone="06 58 23 03 26"
                  email="accueil@declicetdesclaps.fr"
                  link="/contact/#write"
                  textbutton="Ecrivez-nous"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CarteRdvHoriz;
