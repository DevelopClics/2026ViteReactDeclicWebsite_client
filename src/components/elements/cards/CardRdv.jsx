import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
// import Button from "react-bootstrap/Button";
import { HashLink as Link } from "../navigation/HashLink";
import Card from "react-bootstrap/Card";

const CarteRdv = ({ pct, title, content, link }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Card
      // className="col-12 col-sm-6 col-lg-3"
      className={`
        rounded-4 col-6  col-sm-5 m-sm-3   p-3
      

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

export default CarteRdv;
