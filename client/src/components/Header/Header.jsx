// import "./Header.scss";
import React from "react";

// img
import logoImage from "../../assets/png/cloud_logo.png";

// sc
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderImgWrap,
  HeaderImage,
} from "./Header.styles.js";

const Header = () => (
  <HeaderContainer>
    <HeaderWrapper>
      <HeaderImgWrap>
        <HeaderImage src={logoImage} alt="cloudy logo" />
      </HeaderImgWrap>
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;
