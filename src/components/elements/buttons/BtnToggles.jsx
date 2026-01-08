import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import "./BtnToggles.css";

const BtnToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      // className="my-auto ms-2"
      onClick={toggleTheme}
    >
      {theme ? (
        <span>
          <BsFillBrightnessHighFill className="btntoggle btntoggledark" />
        </span>
      ) : (
        <span>
          <BsFillMoonFill className="btntoggle btntoggledark" />
        </span>
      )}
    </div>
  );
};

export default BtnToggle;
