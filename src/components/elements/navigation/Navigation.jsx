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

  const scrollWithOffset = (el) => {
    const yOffset = -100; // Standard offset to account for navbar height
    const scroll = () => {
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    // Initial scroll
    scroll();

    // Multiple delayed calls to catch layout shifts from loading images
    setTimeout(scroll, 300);
    setTimeout(scroll, 800);
    setTimeout(scroll, 1500);
  };

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
    Array(navLinks.length).fill(false),
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
                    className={`me-lg-3  align-items-center border border-warning rounded-2 text-lg-center text-start`}
                  >
                    <Button
                      as={Link}
                      onClick={handleNavClose}
                      className={`btn-transparent border-0 nav-style ${
                        theme ? `nav-style-light` : `nav-style-dark`
                      }`}
                      to={navLink.to}
                      scroll={scrollWithOffset}
                    >
                      {navLink.title}
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
                            scroll={scrollWithOffset}
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
                  as={Link}
                  key={index}
                  className={`me-3 d-flex align-items-center justify-content-lg-center justify-content-start  border border-warning text-lg-center text-start btn-transparent nav-style ${
                    theme ? `nav-style-light` : `nav-style-dark`
                  }`}
                  to={navLink.to}
                  scroll={scrollWithOffset}
                  onClick={handleNavClose}
                >
                  {navLink.title}
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
