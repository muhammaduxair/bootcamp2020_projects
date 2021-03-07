import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Github from "../assets/github.png";

const Footer = () => {
  return (
    <div className="container-fluid FOOTER">
      <div className="row">
        <div className="col-12 col-lg-6 col-xl-6">
          <p>SpaceX © 2021 | AllRight Reserved | Created By Muhammad Uzair</p>
        </div>
        <div className="col-12 col-lg-6 col-xl-6">
          <a href="facebook.com/m.uzair17/" target="_blank">
            <img src={Facebook} alt="Facebook_logo" />
          </a>
          <a
            href="https://www.instagram.com/unofficial_uzair_jaan/"
            target="_blank"
          >
            <img src={Instagram} alt="Instagram_logo" />
          </a>
          <a href="#">
            <img src={Github} alt="Github_logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
