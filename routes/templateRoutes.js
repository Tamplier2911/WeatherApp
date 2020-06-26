const express = require("express");
const {
  getHomeTemplate,
  getHelpTemplate,
  getAboutTemplate,
  getWeatherByAddress,
} = require("../controllers/templatesController");

const router = express.Router();

router.get("/home", getHomeTemplate);

router.get("/help", getHelpTemplate);

router.get("/about", getAboutTemplate);

router.get("/weather", getWeatherByAddress);

module.exports = router;
