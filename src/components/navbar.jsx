import React from "react";
// import covid_logo from "../assets/covid-logo.png";
import BUTTON from "../material_ui/button";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";

const TOGGLERBTTN_STYLE = {
  width: "25px",
  height: "3px",
  margin: "5px 0",
  background: "#000",
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light NAVBAR">
      <div className="container-fluid">
        <a className="navbar-brand NAVBAR_BRAND" href="">
          COVID-19
        </a>
        <div
          className="navbar-toggler"
          style={{ fontSize: "1rem", border: "none" }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div style={TOGGLERBTTN_STYLE}></div>
          <div style={TOGGLERBTTN_STYLE}></div>
          <div style={TOGGLERBTTN_STYLE}></div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav my-2 ml-auto">
            <li className="nav-item mx-2">
              <BUTTON text="Home" active={true} />
            </li>
            <li className="nav-item  mx-2">
              <BUTTON text="Global" />
            </li>
            <li className="nav-item  mx-2">
              <BUTTON text="Countries" />
            </li>
            <li className="nav-item  mx-2">
              <BUTTON text="What is Covid-19" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
