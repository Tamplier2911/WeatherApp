// import "./HelpPage.scss";
import React from "react";

// components
import RouterLink from "../../components/RouterLink/RouterLink.jsx";

// sc
import {
  HelpPageSection,
  HelpPageHeader,
  HelpPageLinksContainer,
} from "./HelpPage.styles.js";

const HelpPage = () => (
  <HelpPageSection>
    <HelpPageHeader>Help is comming!</HelpPageHeader>
    <HelpPageLinksContainer>
      <RouterLink title="Read more?" to="/about" />
    </HelpPageLinksContainer>
  </HelpPageSection>
);

export default HelpPage;
