import "./Header.scss";
import React from "react";

// img
import logoImage from "../../assets/png/cloud_logo.png";

const Header = () => (
  <header className="header">
    <div>
      <div className="header__imgwrap">
        <img className="header__img" src={logoImage} alt="cloudy logo" />
      </div>
    </div>
  </header>
);

export default Header;
