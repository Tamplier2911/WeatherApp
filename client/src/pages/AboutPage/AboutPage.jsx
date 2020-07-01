import "./AboutPage.scss";
import React from "react";

// components
import RouterLink from "../../components/RouterLink/RouterLink.jsx";

const AboutPage = () => (
  <section className="aboutSection">
    <h1 className="aboutSection__title">You are breathtaking!</h1>
    <div className="aboutSection__container">
      <RouterLink title="Back to home?" to="/home" />
    </div>
  </section>
);

export default AboutPage;
