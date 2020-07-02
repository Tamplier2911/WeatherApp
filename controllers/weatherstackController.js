const request = require("postman-request");

// WEATHERSTACK URL - https://weatherstack.com/dashboard
// WEATHER - query can as well consist of longitude and latitude

/**
 * @function - fetch weather of certain position on earth, based on longitude and latitude
 * @param {object} coordinatesObj - object of latitude and longitude values
 * @param {function} cb - callback of what we want to happen once we get our data
 */

exports.getWeatherByCoordinates = (coordinatesObj, cb) => {
  const { latitude, longitude } = coordinatesObj;
  const weatherStack = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${latitude},${longitude}&units=m`;

  request(
    { uri: weatherStack, method: "GET", json: true },
    (err, res, body) => {
      if (err) return cb(err, null);
      if (!body.success && res.statusCode !== 200)
        return cb({ name: body.error.type, message: body.error.info }, null);
      // console.log(res.body);
      // console.log(body);
      // console.log(res.statusCode);
      const { location, current } = body;
      return cb(null, { location, current });
    }
  );
};

// DTO - of current weather GET Request

/*

{
  request: { type: 'City', query: 'Kiev, Ukraine', language: 'en', unit: 'm' },
  location: {
    name: 'Kiev',
    country: 'Ukraine',
    region: "Kyyivs'ka Oblast'",
    lat: '50.433',
    lon: '30.517',
    timezone_id: 'Europe/Kiev',
    localtime: '2020-06-14 21:45',
    localtime_epoch: 1592171100,
    utc_offset: '3.0'
  },
  current: {
    observation_time: '06:45 PM',
    temperature: 20,
    weather_code: 113,
    weather_icons: [
      'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png'
    ],
    weather_descriptions: [ 'Clear' ],
    wind_speed: 11,
    wind_degree: 80,
    wind_dir: 'E',
    pressure: 1010,
    precip: 5.9,
    humidity: 94,
    cloudcover: 0,
    feelslike: 20,
    uv_index: 1,
    visibility: 10,
    is_day: 'no'
  }
}

*/
