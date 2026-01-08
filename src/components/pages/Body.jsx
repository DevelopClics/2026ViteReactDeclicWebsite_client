import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Views from "../Views";
import "../../App.css";

const Body = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={`App-header ${
        theme ? `bg-dark text-light` : `bg-lum text-dark`
      }`}
    >
      <Views />
    </header>
  );
};

export default Body;
