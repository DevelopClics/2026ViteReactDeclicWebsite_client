import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { HashLink as Link } from "../navigation/HashLink";

const BtnContact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to="/contact/#banner">
      <button
        type="button"
        className={`btn btn-sm fw-bold
              ${theme ? `btn-outline-light` : `btn-outline-dark`}
              `}
      >
        Contactez-nous
      </button>
    </Link>
  );
};

export default BtnContact;
