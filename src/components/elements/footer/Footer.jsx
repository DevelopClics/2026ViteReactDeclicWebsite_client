import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "../../../App.css";
import "./Footer.css";
import px from "../../../img/px.svg";
import ESS from "../../../img/Engagé pour ESS_Logo_V2_Blanc-01.png";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";

import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink as Linky } from "../navigation/HashLink";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`border-top  border-3 border-warning fixed-bottom px-2 pt-xs-2 pt-sm-2 foot-link ${
          theme ? `bg-darkness` : `bg-light`
        }`}
        // style={{
        //   position: "fixed",
        // }}
      >
        {/* ESS Logo above footer */}
        <img
          src={ESS}
          alt="Engagé pour l'ESS"
          style={{
            position: "absolute",
            bottom: "60%",
            right: "0",
            width: "500px",
            height: "auto",
            zIndex: 10,
          }}
        />
        <h6>
          <Linky to="/#home" aria-current="page">
            <img
              src={px}
              className={`App-logo-foot  ${
                theme
                  ? `imagedefond-footer-light im-fond`
                  : `imagedefond-footer-dark im-fond`
              }`}
              alt="logo"
            />{" "}
          </Linky>

          <span
            className={`d-inline ${
              theme ? `foot-style-light` : `foot-style-dark`
            }`}
          >
            <span className="Texte1 d-none d-sm-inline">
              © Déclic et des Claps - 2025
            </span>
            <span className="Texte1 d-inline d-sm-none">© DEDC - 2025</span>
          </span>
          {/* Tous droits */}
          <span
            className={`d-block d-sm-inline ${
              theme ? `foot-style-light` : `foot-style-dark`
            }`}
          >
            {" "}
            <span className="Texte1 d-none d-sm-inline">
              - Tous droits réservés{" "}
            </span>
          </span>
          {/* RS */}
          <span className="d-inline d-sm-block d-md-inline ">
            {/* INSTAGRAM */}
            <a
              className={theme ? `foot-style-light` : `foot-style-dark`}
              href="https://www.instagram.com/declicetdesclapsleteil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                {/* Logo INSTA */}
                <FaSquareInstagram className="mb-1" />
                {/* Texte INSTA */}
                <span className="d-inline d-sm-none"> Insta </span>
                <span className="d-none d-sm-inline"> Instagram </span>

                {/* Séparateur */}
                <span
                  className={`d-none d-sm-inline d-md-none d-lg-inline ${
                    theme ? `foot-style-light` : `foot-style-dark`
                  }`}
                >
                  I{" "}
                </span>
              </span>
            </a>

            {/* FACEBOOK */}
            <a
              className={theme ? `foot-style-light` : `foot-style-dark`}
              href="https://www.facebook.com/profile.php?id=100094026464760"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <BiLogoFacebookSquare className="mb-1" />
              </span>
              <span className="d-inline d-sm-none"> FB </span>
              <span className="d-none d-sm-inline">Facebook </span>
            </a>

            <span
              className={`d-none d-sm-inline d-md-none d-lg-inline ${
                theme ? `foot-style-light` : `foot-style-dark`
              }`}
            >
              I{" "}
            </span>

            <span
              className={`${theme ? `foot-style-light` : `foot-style-dark`}`}
            >
              <span className="d-inline d-md-block d-lg-inline">
                {/* <span>
                  <BiNews className="mb-1" />
                </span>
                <span className="d-none d-md-inline"> S'abonner à la </span>
                <span className="d-inline d-sm-none"> News </span>
                <span className="d-none d-sm-inline"> Newsletter </span>

                <span
                  className={`d-none d-sm-inline ${
                    theme ? `foot-style-light` : `foot-style-dark`
                  }`}
                >
                  {" "}
                  I{" "}
                </span> */}

                <Link
                  className={theme ? `foot-style-light` : `foot-style-dark`}
                  to="/contact/#banner"
                >
                  <IoIosMail className="mb-1" />
                  <span> Contacts</span>
                </Link>
                <Link
                  className={theme ? `foot-style-light` : `foot-style-dark`}
                  to="/infos#"
                  aria-current="page"
                >
                  <span className="Texte1 d-block d-sm-inline">
                    &nbsp;Informations légales
                  </span>
                </Link>
              </span>
            </span>
          </span>
        </h6>
      </div>
    </>
  );
};

export default Footer;
