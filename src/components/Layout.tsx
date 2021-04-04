import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";

interface LayoutInt {
  children: ReactNode;
}

const Layout = ({ children }: LayoutInt) => {
  return (
    <div className="mainContainer">
      <nav>
        <section>
          <Link to="/">
            <h2>foodxup</h2>
          </Link>
        </section>
        <section id="navList">
          <ul>
            <li>
              <Link to="/" activeClassName="activeLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" activeClassName="activeLink">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="activeLink">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="activeLink">
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      {/* ====================== React Node ======================== */}
      <div className="mainNodeDIV">{children}</div>
      {/* ========================================================== */}
      <footer>
        <p>
          copyright © 2021 All Right Reserved | Created By{" "}
          <a href="https://github.com/muhammaduxair" target="_blank">
            Muhammad Uzair
          </a>
        </p>
        <span>
          <Facebook className="socialIcon" />
          <LinkedIn className="socialIcon" />
          <GitHub className="socialIcon" />
        </span>
      </footer>
    </div>
  );
};
export default Layout;
