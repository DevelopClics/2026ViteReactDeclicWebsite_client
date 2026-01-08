import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
// import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";
import Card from "react-bootstrap/Card";

const CarteForces = ({ title, content }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      // className="col-12 col-sm-6 col-lg-3"
      style={{ backgroundColor: "#f39540" }}
      className={`rounded-4 mb-3 mb-sm-3 col-12 col-sm-12 col-md-6 m-md-0 col-lg-5 m-lg-2 col-xl-5 col-xxl-4 pt-3
        ${theme ? `nav-style-black text-light` : `nav-style-white`}
        `}
    >
      {/* <Card.Img className="rounded-2" variant="top" src={pct} /> */}
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <h4>
            <strong>{title}</strong>
          </h4>
          <p>{content}</p>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CarteForces;
