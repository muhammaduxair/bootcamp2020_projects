import React from "react";
import AddidasLogo from "./assets/addidas.png";
import { Button } from "@material-ui/core";
import CartBadge from "./cartBadge";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const DATA = useSelector((state) => state.count);
  const history = useHistory();

  return (
    <div className="navbar">
      <div className="logoBar">
        <img
          src={AddidasLogo}
          alt="addidas logo"
          data-aos="fade-out"
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="linksBar">
        <Button
          className="Bttn"
          data-aos="fade-in"
          onClick={() => history.push("/")}
        >
          Home
        </Button>
        <Button
          className="Bttn"
          data-aos="fade-in"
          onClick={() => history.push("/products")}
        >
          Product
        </Button>
        <span
          onClick={() => {
            history.push("/cart");
          }}
        >
          <CartBadge className="cartBttn" count={DATA} data_aos="fade-in" />
        </span>
      </div>
    </div>
  );
}
