import React from "react";
import "./Footer.css";
import Brandlogo from "../BrandLogo/Brandlogo";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <Brandlogo />
        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
