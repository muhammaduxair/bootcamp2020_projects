import React from "react";
import LOGOIMG from "../assets/COVIDLOGO.png";

const MainScreen = () => {
  return (
    <div className="MainScreen">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-7 col-sm-12 col-lg-6 col-12 leftCorner">
            <h1>
              C
              <img src={LOGOIMG} alt="Corona_Logo" />
              VID-19
              <h3>#StayHomeStaySafe</h3>
            </h1>
          </div>
          <div className="col col-md-5 col-12 col-sm-12 col-lg-6 rightCorner">
            <h1>ABOUT COVID-19</h1>
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus. Most people who fall sick with
              COVID-19 will experience mild to moderate symptoms and recover
              without special treatment.
              <br />
              <br />
              <span>HOW IT SPREADS</span>
              <br /> The virus that causes COVID-19 is mainly transmitted
              through droplets generated when an infected person coughs,
              sneezes, or exhales. These droplets are too heavy to hang in the
              air, and quickly fall on floors or surfaces. You can be infected
              by breathing in the virus if you are within close proximity of
              someone who has COVID-19, or by touching a contaminated surface
              and then your eyes, nose or mouth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
