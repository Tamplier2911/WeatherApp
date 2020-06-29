const { getWeatherByCoordinates } = require("./weatherstackController");
const { getCoordinatesByAddress } = require("./mapboxController");

exports.getHomeTemplate = (req, res, next) => {
  const valuesObject = { title: "Home Page" };
  res.render("home", valuesObject);
};

exports.getHelpTemplate = (req, res, next) => {
  const valuesObject = { title: "Help Page" };
  res.render("help", valuesObject);
};

exports.getAboutTemplate = (req, res, next) => {
  const valuesObject = { title: "About Page" };
  res.render("about", valuesObject);
};

exports.getWeatherTemplate = (req, res, next) => {
  const valuesObject = { title: "Weather Page" };
  res.render("weather", valuesObject);
};

exports.getWeatherByAddress = (req, res, next) => {
  const { address } = req.params;
  const lang = req.acceptsLanguages()[0];

  const valuesObject = { title: "Weather Page" };

  if (!address) {
    valuesObject.error =
      "You must provide an address in order to get weather forecast.";
    return res.render("weather", valuesObject);
  }

  const processingData = { query: address, language: lang };

  // call for mapbox with provided query string to get coordinates
  getCoordinatesByAddress(processingData, (err, data) => {
    if (err) {
      valuesObject.error = err.name;
      valuesObject.errorMessage = err.message;
      return res.render("weather", valuesObject);
    }

    const { longitude, latitude, place } = data;

    // provide coordinates to weatherstack to get weather forecast for this area
    getWeatherByCoordinates({ longitude, latitude }, (err, data) => {
      if (err) {
        valuesObject.error = err.name;
        valuesObject.errorMessage = err.message;
        return res.render("weather", valuesObject);
      }

      const {
        current: {
          temperature,
          weather_icons,
          weather_descriptions,
          feelslike,
        },
      } = data;

      valuesObject.title = "Forecast Page";
      valuesObject.place = place;
      valuesObject.temperature = temperature;
      valuesObject.weather_icons = weather_icons;
      valuesObject.desc = weather_descriptions;
      valuesObject.feelslike = feelslike;

      res.render("forecast", valuesObject);
    });
  });
};
