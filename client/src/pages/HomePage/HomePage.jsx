import "./HomePage.scss";
import React from "react";

// components
import RouterLink from "../../components/RouterLink/RouterLink.jsx";

const HomePage = () => (
  <section className="homeSection">
    <h1 className="homeSection__title">Welcome!</h1>
    <div className="homeSection__container">
      <RouterLink title="Need help?" to="/help" />
      <RouterLink title="Interested in weather forecast?" to="/weather" />
      <RouterLink title="Back to Back-End?" href="/api/v1/template/home" />
    </div>
  </section>
);

export default HomePage;
