import React, { useContext } from "react";

import Card from "react-bootstrap/Card";
import { HashLink as Link } from "../navigation/HashLink";
import { ThemeContext } from "../../../context/ThemeContext";

const CarteInfos = ({ title, text, phone, email, link, textbutton }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Card
    // className={`
    // rounded-4 ${theme ? `bg-primary text-light` : `nav-style-white`}
    // `}
    >
      <Card.Header className="background-infos">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>
          <span>{phone}</span> - <span>{email}</span>
        </Card.Text>
        <Link to={link}>
          <button type="button" className="btn btn-lg background-infos">
            {textbutton}
          </button>
        </Link>
        {/* <Button variant="primary">{textbutton}</Button> */}
      </Card.Body>
    </Card>
  );
};

export default CarteInfos;
