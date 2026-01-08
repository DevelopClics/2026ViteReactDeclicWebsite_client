import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
// import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";
import Card from "react-bootstrap/Card";

const Carte = ({ pct, link, title, content }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      style={{ backgroundColor: "#f39540" }}
      className={`my-2 rounded-4 col-12  col-sm-12 col-md-6 m-md-0 col-lg-3 m-lg-4 col-xl-2 col-xxl-2 pt-3
        ${theme ? `nav-style-black text-light` : `nav-style-white`}
        `}
    >
      <Card.Img className="rounded-2" variant="top" src={pct} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <h2>
            <strong>{title}</strong>
          </h2>
          <p>
            <strong>{content}</strong>
          </p>
        </Card.Title>
        {/* <Card.Text>{content}</Card.Text> */}

        <div className="mt-auto">
          <Link to={link}>
            <button
              type="button"
              className={`btn btn-sm fw-bold
                    ${theme ? `btn-outline-light` : `btn-outline-dark`}
                    `}
            >
              En Savoir +
            </button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Carte;
