import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
// import Button from "react-bootstrap/Button";
// import { HashLink as Link } from "react-router-hash-link";
import Card from "react-bootstrap/Card";

const CarteNombres = ({ pct, title, content }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      // className="col-12 col-sm-6 col-lg-3"
      style={{ backgroundColor: "#3f245d" }}
      className="my-2 rounded-4 col-12  col-sm-12 col-md-6 m-md-0 col-lg-3 m-lg-4 col-xl-2 col-xxl-2 pt-3"
    >
      <Card.Img className="rounded-2" variant="top" src={pct} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <h1 style={{ color: "orange" }}>
            <strong>{title}</strong>
          </h1>
          <p style={{ color: "white" }}>{content}</p>
        </Card.Title>
        {/* <Card.Text>{content}</Card.Text> */}

        <div className="mt-auto"></div>
      </Card.Body>
    </Card>
  );
};

export default CarteNombres;
