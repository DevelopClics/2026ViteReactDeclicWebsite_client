import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { HashLink as Link } from "react-router-hash-link";
import Card from "react-bootstrap/Card";

const CarteConcierge = ({ pct, alt, title, line1, line2, line3, line4 }) => {
  const { theme } = useContext(ThemeContext);

  const a = 1.2;

  return (
    <>
      <Card
        style={{ backgroundColor: "#9ed0c3" }}
        className="col-12  col-sm-12 col-md-6 m-md-0 col-lg-5 mb-3 m-lg-3 col-xl-3 col-xxl-3 pt-3"
      >
        <Card.Img className="h-50" variant="top" src={pct} alt={alt} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>
            <h4>
              <strong>{title}</strong>
            </h4>
          </Card.Title>
          <Card.Text>
            <span style={{ fontSize: `${a}rem` }}>{line1}</span> <br />
            <span style={{ fontSize: `${a}rem` }}>{line2}</span> <br />
            <span style={{ fontSize: `${a}rem` }}>{line3}</span> <br />
            <span style={{ fontSize: `${a}rem` }}>{line4}</span>
          </Card.Text>

          <div className="mt-auto"></div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CarteConcierge;
