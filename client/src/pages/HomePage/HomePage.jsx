// import "./HomePage.scss";
import React from "react";

// components
import RouterLink from "../../components/RouterLink/RouterLink.jsx";

// sc
import {
  HomePageSection,
  HomePageHeader,
  HomePageLinksContainer,
} from "./HomePage.styles.js";

const HomePage = () => (
  <HomePageSection>
    <HomePageHeader>Welcome!</HomePageHeader>
    <HomePageLinksContainer>
      <RouterLink title="Need help?" to="/help" />
      <RouterLink title="Interested in weather forecast?" to="/weather" />
      <RouterLink title="Back to Back-End?" href="/api/v1/template/home" />
    </HomePageLinksContainer>
  </HomePageSection>
);

export default HomePage;
