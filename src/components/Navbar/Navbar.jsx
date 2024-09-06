import React from "react";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" />
        </a>
      </div>
    </nav>
  );
};
