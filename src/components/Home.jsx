import React from "react";
import mainShoes from "./assets/main_shoes.png";
import Wave from "./assets/wave.svg";
import { Button } from "@material-ui/core";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="main_box">
      <div className="topBox">
        <Navbar />
        {/* text area */}
        <div className="text-container">
          <div className="mainTextWrapper">
            <h1 data-aos="fade-right">
              <span>Addidas</span> The Shoes World
            </h1>
            <p data-aos="fade-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
              quis. Ipsam quaerat commodi necessitatibus iste itaque hic
              sapiente accusantium, consequuntur odio architecto, eos cupiditate
              velit ut iusto laudantium nihil nulla repellendus facere earum
              tempora omnis dolore. Eveniet, sapiente voluptatem.
            </p>
            <Button
              className="Bttn"
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-duration="500"
              onClick={() => history.push("/products")}
            >
              Shop Now
            </Button>
          </div>
        </div>
        {/* text area end */}
      </div>
      <div className="bottomBox">
        <div className="backgroundDIV">
          <img src={Wave} alt="wave" />
          <span className="blueBG"></span>
        </div>
        <div className="IMGDIV">
          <img
            src={mainShoes}
            alt="shoes image"
            data-aos="slide-left"
            data-aos-duration="1500"
          />
        </div>
        <p>
          Created By{" "}
          <span>
            <a href="https://github.com/muhammaduxair" target="_blank">
              Muhammad Uzair
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
