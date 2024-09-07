import React from "react";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
