const express = require("express");

const {
  getWeatherByAddressInJSON,
} = require("../controllers/weatherController");

const router = express.Router();

router.get("/:address", getWeatherByAddressInJSON);

module.exports = router;
