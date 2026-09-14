import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { HashLink as Link } from "./HashLink";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import "../../../App.css";

import px from "../../../img/px.svg";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import BtnToggle from "../Buttons/BtnToggles";
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  // State to control the expanded/collapsed state of the Navbar
  const [expanded, setExpanded] = useState(false);

  // Function to close the Navbar
  const handleNavClose = () => setExpanded(false);

  return (
    <Navbar
      // --- ALL CHANGES FOR CORE FUNCTIONALITY ARE HERE ---
      expanded={expanded} // Controls whether the nav is expanded or not
      onSelect={handleNavClose}
      onToggle={() => setExpanded(!expanded)} // Toggles the state when the hamburger button is clicked
      expand="lg"
      sticky="top"
      className={`border-bottom border-3 border-warning ${
        theme ? `bg-darkness` : `bg-light`
      }`}
    >
      <Container fluid className="mulish mulish-weight">
        <Navbar.Brand
          as={Link}
          to="/#home"
          aria-current="page"
          onClick={handleNavClose} // Also close nav if brand is clicked
        >
          <img
            src={px}
            className={`App-nav ${
              theme ? `imagedefond-dark` : `imagedefond-light`
            }`}
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* This Navbar.Collapse no longer needs custom classes to show/hide */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" id="vert" navbarScroll>
            {/* 0 Bouton Accueil */}
            <Nav.Link
              onClick={handleNavClose}
              as={Link}
              to="/#home"
              eventKey="0"
              className="me-3 border border-warning text-lg-center text-start"
            >
              <span
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Accueil
              </span>
            </Nav.Link>

            {/* 1 Bouton Actualités */}
            <Nav.Link
              onClick={handleNavClose}
              as={Link}
              to="/news/#banner"
              eventKey="1"
              className="me-3 border border-warning text-lg-center text-start"
            >
              <span
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Nos prochains rendez-vous
              </span>
            </Nav.Link>

            {/* 2 Bouton Nos Services */}
            <NavDropdown
              title="Nos offres de services"
              id="nav-dropdown-services"
              className="me-3 border border-warning rounded-2 text-lg-center text-start"
            >
              <NavDropdown.Item
                as={Link}
                to="/services/#banner"
                eventKey="2.0"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Nos offres de services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/services/#lol"
                eventKey="2.1"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Bar à jeux, Le LOL
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/services/#animations"
                eventKey="2.2"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Animations jeux
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/services/#bienvenue"
                eventKey="2.3"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Conciergerie de gîtes saisonniers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/services/#location"
                eventKey="2.4"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Location de vaisselle et de décoration de table
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/services/#event-logistics"
                eventKey="2.5"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Logistique évènementielle
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/services/#distribution"
                eventKey="2.6"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Diffusion de flyers et affiches
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/services/#mobile-tavern"
                eventKey="2.7"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Guinguette mobile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/services/#after-school-workshops"
                eventKey="2.8"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Ateliers périscolaires
              </NavDropdown.Item>
            </NavDropdown>

            {/* 3. Partenaires et clients */}
            <Nav.Link
              as={Link}
              to="/join-us/#banner"
              eventKey="3"
              className="me-3 border border-warning text-lg-center text-start"
            >
              <span
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Partenaires et clients
              </span>
            </Nav.Link>

            {/* 4 Bouton A projet */}
            <NavDropdown
              title="Le projet"
              id="nav-dropdown-about"
              className="me-3 border border-warning rounded-2 text-lg-center text-start"
            >
              <NavDropdown.Item
                as={Link}
                to="/about/#banner"
                eventKey="4.0"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Le projet
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/about/#national-experimention"
                eventKey="4.1"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Qui sommes nous ?
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/about/#tzcld"
                eventKey="4.2"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Territoire Zéro Chômeur de Longue Durée
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/about/#team"
                eventKey="4.3"
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                L'équipe de Déclic
              </NavDropdown.Item>
            </NavDropdown>

            {/* Bouton contacts */}
            <Nav.Link
              as={Link}
              to="/contact/#banner"
              eventKey="5"
              className="me-3 border border-warning text-lg-center text-start"
            >
              <span
                className={`nav-style ${
                  theme ? `nav-style-light` : `nav-style-dark`
                }`}
              >
                Contacts
              </span>
            </Nav.Link>

            <Nav.Link>
              <BtnToggle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
