import React from "react";
import { Facebook, GitHub } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="txt">Created by Muhammad Uzair</div>
      <div className="social-icons">
        <a href="https://www.facebook.com/m.uzair17/" target="_blank">
          <Facebook className="ico ico1" />
        </a>
        <a href="https://github.com/muhammaduxair" target="_blank">
          <GitHub className="ico ico2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
