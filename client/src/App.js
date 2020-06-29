import "./App.scss";
import React from "react";

// router
import { Switch, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

// pages

import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import HelpPage from "./pages/HelpPage/HelpPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import WeatherPage from "./pages/WeatherPage/WeatherPage.jsx";

// js rendering css
import { AppContainer, AppMain } from "./AppStyles";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <AppMain>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/help" component={HelpPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/weather" component={WeatherPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </AppMain>
      <Footer />
    </AppContainer>
  );
};

export default App;
