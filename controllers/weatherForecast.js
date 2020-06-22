/*


const {
  getWeatherByCoordinates,
} = require("./controllers/weatherstackController");
const { getCoordinatesByAddress } = require("./controllers/mapboxController");

const position = process.argv[2];

if (!position)
  return console.log(
    "Please, provide address using process arguments e.g. --data='Kiev'."
  );

// call for mapbox with provided query string to get coordinates
getCoordinatesByAddress({ query: position, language: "en" }, (err, data) => {
  if (err) return console.log(err.name, err.message);
  const { longtitude, latitude, place } = data;

  // provide coordinates to weatherstack to get weather forecast for this area
  getWeatherByCoordinates({ longtitude, latitude }, (err, data) => {
    if (err) return console.log(err.name, err.message);
    const {
      current: { temperature, weather_icons, weather_descriptions, feelslike },
    } = data;

    // output data
    console.log(`Weather forecast for ${place}.`);
    console.log(
      `Weather description - ${weather_descriptions.join(
        ", "
      )}, current temperature ${temperature}°, feels like ${feelslike}°.`
    );
    return;
  });
});


*/
