const express = require("express");

const router = express.Router();

router.get("/home", (req, res, next) => {
  const valuesObject = { title: "Home Page" };
  res.render("home", valuesObject);
});

router.get("/help", (req, res, next) => {
  const valuesObject = { title: "Help Page" };
  res.render("help", valuesObject);
});

router.get("/about", (req, res, next) => {
  const valuesObject = { title: "About Page" };
  res.render("about", valuesObject);
});

router.get("/weather", (req, res, next) => {
  res.status(200).json({
    success: true,
    forecast: {
      place: "Avdiivka, Donetska Oblast, Ukraine",
      temperature: 26,
      feelslike: 28,
    },
  });
});

module.exports = router;
