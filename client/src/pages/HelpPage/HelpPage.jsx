import "./HelpPage.scss";
import React from "react";

// components
import RouterLink from "../../components/RouterLink/RouterLink.jsx";

const HelpPage = () => (
  <section className="helpSection">
    <h1 className="helpSection__title">Help is comming!</h1>
    <div className="helpSection__container">
      <RouterLink title="Read more?" to="/about" />
    </div>
  </section>
);

export default HelpPage;
