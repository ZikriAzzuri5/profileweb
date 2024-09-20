import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export const Navbar = ({ toggleDarkMode, darkMode }) => {
  const currentRoute =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");
  const [activeSection, setActiveSection] = useState(currentRoute);

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      } sticky-top`}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
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
              {currentRoute !== "home" ? (
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => handleSetActive("home")}
                >
                  Home
                </Link>
              ) : (
                <a
                  className={`nav-link ${
                    activeSection === "home" ? "active fw-bold" : ""
                  } `}
                  href="#home"
                  onClick={() => handleSetActive("home")}
                >
                  Home
                </a>
              )}
            </li>
            <li className="nav-item me-4">
              {currentRoute !== "home" ? (
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => handleSetActive("home")}
                >
                  About
                </Link>
              ) : (
                <a
                  className={`nav-link ${
                    activeSection === "about" ? "active fw-bold" : ""
                  } `}
                  href="#about"
                  onClick={() => handleSetActive("about")}
                >
                  About
                </a>
              )}
            </li>
            <li className="nav-item me-4">
              {currentRoute !== "home" ? (
                <Link
                  to="/"
                  className={`nav-link ${
                    currentRoute === "projects" ? "active fw-bold" : ""
                  } `}
                  onClick={() => handleSetActive("home")}
                >
                  Projects
                </Link>
              ) : (
                <a
                  className={`nav-link ${
                    activeSection === "projects" ? "active fw-bold" : ""
                  } `}
                  href="#projects"
                  onClick={() => handleSetActive("projects")}
                >
                  Projects
                </a>
              )}
            </li>
            <li className="nav-item me-4">
              {currentRoute !== "home" ? (
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => handleSetActive("home")}
                >
                  FAQ
                </Link>
              ) : (
                <a
                  className={`nav-link ${
                    activeSection === "faq" ? "active fw-bold" : ""
                  } `}
                  href="#faq"
                  onClick={() => handleSetActive("faq")}
                >
                  FAQ
                </a>
              )}
            </li>
            <li className="nav-item me-4">
              <Link
                to="/contact"
                className={`nav-link ${
                  activeSection === "contact" ? "active fw-bold" : ""
                } `}
                onClick={() => handleSetActive("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className={`btn btn-outline-${darkMode ? "light" : "dark"} ms-3`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};
