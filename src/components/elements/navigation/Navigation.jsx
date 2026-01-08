import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { HashLink as Link } from "react-router-hash-link";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import "../../../App.css";

import px from "../../../img/px.svg";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import BtnToggle from "../buttons/BtnToggles";
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);

  const navLinks = [
    {
      title: "Accueil",
      to: "/#home",
    },
    {
      title: "Nos prochains rendez-vous",
      to: "/news/#banner",
    },
    {
      title: "Nos offres de services",
      to: "/services/#banner",
      subLinks: [
        {
          title: "Bar à jeux, Le LOL",
          to: "/services/#lol",
        },
        {
          title: "Animations jeux",
          to: "/services/#animations",
        },
        {
          title: "Conciergerie de gîtes saisonniers",
          to: "/services/#bienvenue",
        },
        {
          title: "Location de vaisselle et de décoration de table",
          to: "/services/#location",
        },
        {
          title: "Logistique évènementielle",
          to: "/services/#event-logistics",
        },
        {
          title: "Diffusion de flyers et affiches",
          to: "/services/#distribution",
        },
        {
          title: "Guinguette mobile",
          to: "/services/#mobile-tavern",
        },
        {
          title: "Ateliers périscolaires",
          to: "/services/#after-school-workshops",
        },
      ],
    },
    {
      title: "Partenaires et clients",
      to: "/join-us/#banner",
    },
    {
      title: "Le projet",
      to: "/about/#banner",
      subLinks: [
        {
          title: "Qui sommes nous ?",
          to: "/about/#national-experimention",
        },
        {
          title: "Territoire Zéro Chômeur de Longue Durée",
          to: "/about/#tzcld",
        },
        {
          title: "L'équipe de Déclic",
          to: "/about/#team",
        },
      ],
    },
    {
      title: "Contacts",
      to: "/contact/#banner",
    },
  ];

  const [dropdownShows, setDropdownShows] = useState(
    Array(navLinks.length).fill(false)
  );

  const handleDropdownShow = (index, show) => {
    const newDropdownShows = [...dropdownShows];
    newDropdownShows[index] = show;
    setDropdownShows(newDropdownShows);
  };

  return (
    <Navbar
      expanded={expanded}
      onSelect={handleNavClose}
      onToggle={() => setExpanded(!expanded)}
      expand="lg"
      fixed="top"
      className={`border-bottom border-3 border-warning ${
        theme ? `bg-darkness` : `bg-light`
      }`}
    >
      <Container fluid className="mulish mulish-weight">
        <Navbar.Brand
          onClick={handleNavClose}
          as={Link}
          to="/#home"
          aria-current="page"
        >
          <img
            src={px}
            className={`App-nav ${
              theme ? `imagedefond-dark` : `imagedefond-light`
            }`}
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={expanded ? "navbar-toggler-expanded" : ""}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" id="vert" navbarScroll>
            {navLinks.map((navLink, index) => {
              if (navLink.subLinks) {
                return (
                  <Dropdown
                    key={index}
                    show={dropdownShows[index]}
                    onToggle={(isOpen) => handleDropdownShow(index, isOpen)}
                    onMouseEnter={() => handleDropdownShow(index, true)}
                    onMouseLeave={() => handleDropdownShow(index, false)}
                    className={`me-3 border border-warning rounded-2 text-lg-center text-start`}
                  >
                    <Button className="mt-1" variant="transparent">
                      <Link
                        onClick={handleNavClose}
                        className={`nav-style ${
                          theme ? `nav-style-light` : `nav-style-dark`
                        }`}
                        to={navLink.to}
                      >
                        {navLink.title}
                      </Link>
                    </Button>
                    <Dropdown.Toggle
                      split
                      variant="warning"
                      id={`dropdown-split-basic-${index}`}
                    />
                    <Dropdown.Menu
                      className={`nav-style ${
                        theme ? `nav-style-light` : `nav-style-dark`
                      }`}
                    >
                      {navLink.subLinks.map((subLink, subIndex) => (
                        <React.Fragment key={subIndex}>
                          <Dropdown.Item
                            onClick={handleNavClose}
                            as={Link}
                            to={subLink.to}
                            className={`nav-style ${
                              theme ? `nav-style-light` : `nav-style-dark`
                            }`}
                          >
                            {subLink.title}
                          </Dropdown.Item>
                          {subIndex < navLink.subLinks.length - 1 && (
                            <NavDropdown.Divider
                              className={`nav-style ${
                                theme ? `nav-style-light` : `nav-style-dark`
                              }`}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                );
              }
              return (
                <Button
                  key={index}
                  variant="transparent"
                  className="me-3 border border-warning text-lg-center text-start"
                >
                  <Link
                    onClick={handleNavClose}
                    className={`nav-style ${
                      theme ? `nav-style-light` : `nav-style-dark`
                    }`}
                    to={navLink.to}
                  >
                    {navLink.title}
                  </Link>
                </Button>
              );
            })}
            {/* BOUTON THEME SOMBRE OU CLAIR */}
            <Nav.Link href="#action1">
              <BtnToggle />
            </Nav.Link>
            {/* BOUTON THEME SOMBRE OU CLAIR */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
