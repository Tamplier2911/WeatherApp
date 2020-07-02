// import "./AboutPage.scss";
import React from "react";

// components
import RouterLink from "../../components/RouterLink/RouterLink.jsx";

// sc
import {
  AboutPageSection,
  AboutPageHeader,
  AboutPageLinksContainer,
} from "./AboutPage.styles.js";

const AboutPage = () => (
  <AboutPageSection>
    <AboutPageHeader>You are breathtaking!</AboutPageHeader>
    <AboutPageLinksContainer>
      <RouterLink title="Back to home?" to="/home" />
    </AboutPageLinksContainer>
  </AboutPageSection>
);

export default AboutPage;
