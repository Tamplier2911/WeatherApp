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

exports.getWeatherByAddress = (req, res, next) => {
  const { address } = req.query;
  const lang = req.acceptsLanguages()[0];

  if (!address)
    return res.status(404).send({
      success: false,
      error: "You must provide an address in order to get weather forecast.",
    });

  const processingData = { query: address, language: lang };

  // call for mapbox with provided query string to get coordinates
  getCoordinatesByAddress(processingData, (err, data) => {
    if (err)
      return res.status(404).json({
        success: false,
        error: err.name,
        errorMessage: err.message,
      });

    const { longitude, latitude, place } = data;

    // provide coordinates to weatherstack to get weather forecast for this area
    getWeatherByCoordinates({ longitude, latitude }, (err, data) => {
      if (err)
        return res.status(404).json({
          success: false,
          error: err.name,
          errorMessage: err.message,
        });

      const {
        current: {
          temperature,
          weather_icons,
          weather_descriptions,
          feelslike,
        },
      } = data;

      res.status(200).json({
        success: true,
        forecast: {
          place,
          temperature,
          feelslike,
          weather_descriptions,
          weather_icons,
        },
      });
    });
  });
};
