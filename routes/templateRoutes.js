const express = require("express");
const {
  getHomeTemplate,
  getHelpTemplate,
  getAboutTemplate,
  getWeatherTemplate,
  getWeatherByAddress,
} = require("../controllers/templatesController");
const { route } = require("../app");

const router = express.Router();

router.get("/home", getHomeTemplate);

router.get("/help", getHelpTemplate);

router.get("/about", getAboutTemplate);

router.get("/weather", getWeatherTemplate);

router.get("/weather/:address", getWeatherByAddress);

module.exports = router;
