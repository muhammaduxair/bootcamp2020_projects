import LOGO from "../assets/logo.png";

const Home: React.FC = () => {
  return (
    <div className="container-fluid px-0 MAIN_CONTAINER">
      {/* first row */}
      <div className="row w-100 mx-0">
        <div className="col col-12 HEADER">
          <img src={LOGO} alt="logo_img" />
          <div>
            <button type="button" className="btn btn-light">
              Home
            </button>
            <button type="button" className="btn btn-light">
              <a
                href="#LAUNCHES"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Launches
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="row justify-content-center">
        <div className="col col-lg-8 col-xl-8 col-md-10 col-sm-12 CONTENT_AREA">
          <h1>
            SPACE<span>X</span>
          </h1>
          <p>
            SpaceX designs, manufactures and launches advanced rockets and
            spacecraft. The company was founded in 2002 to revolutionize space
            technology, with the ultimate goal of enabling people to live on
            other planets.
          </p>
          <span>
            <button type="button" className="btn btn-light">
              <a
                href="#MISSIONS"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Missions
              </a>
            </button>
            <button type="button" className="btn btn-light">
              <a
                href="#ROCKETS"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Rockets
              </a>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Home;
