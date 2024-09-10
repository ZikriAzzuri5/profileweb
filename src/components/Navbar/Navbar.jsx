import React, { useState } from "react";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item me-4">
              <a
                className={`nav-link ${
                  activeSection === "home" ? "active fw-bold" : ""
                } `}
                href="#home"
                onClick={() => handleSetActive("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item me-4">
              <a
                className={`nav-link ${
                  activeSection === "about" ? "active fw-bold" : ""
                } `}
                href="#about"
                onClick={() => handleSetActive("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item me-4">
              <a
                className={`nav-link ${
                  activeSection === "projects" ? "active fw-bold" : ""
                } `}
                href="#projects"
                onClick={() => handleSetActive("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item me-4">
              <a
                className={`nav-link ${
                  activeSection === "faq" ? "active fw-bold" : ""
                } `}
                href="#faq"
                onClick={() => handleSetActive("faq")}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
