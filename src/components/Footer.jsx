import React from "react";
import { Facebook, GitHub } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="info">
        <h2>Created By Muhammad Uzair</h2>
      </div>
      <div className="Social_ICons">
        <a href="https://www.facebook.com/m.uzair17/" target="_blank">
          <Facebook className="ICO ICO1" />
        </a>
        <a href="https://github.com/muhammaduxair" target="_blank">
          <GitHub className="ICO ICO2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
