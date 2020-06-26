const request = require("postman-request");

// GEOCODING - if city name is log use %, e.g. Los%20Angeles

/**
 * @function - fetch geocoding information about certain place on earth
 * @param {object} queryObj - object with query string we want to search for and current language,
 * that we want to get our data with, default to "en"
 * @param {function} cb - a callback, what we want to happen, when we get our data
 */

exports.getCoordinatesByAddress = (queryObj, cb) => {
  const { query, language } = queryObj;

  if (!query)
    return cb(
      {
        name: "Uknown position.",
        message: "Please add a place name to start geocoding.",
      },
      null
    );

  const mapBoxPlaces = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    query
  )}.json?limit=1&language=${language ? language : "en"}&access_token=${
    process.env.MAPBOX_API_KEY
  }`;

  request(
    { uri: mapBoxPlaces, method: "GET", json: true },
    (err, res, body) => {
      if (err) return cb(err, null);
      if (!body.features.length)
        return cb(
          {
            name: "Locations name is invalid.",
            message: "Cannot find that location.",
          },
          null
        );
      // console.log(res.body);
      // console.log(body);
      // console.log(res.statusCode);
      const { features } = body;
      const place = features[0].place_name;
      const longitude = features[0].geometry.coordinates[0];
      const latitude = features[0].geometry.coordinates[1];

      return cb(null, { place, longitude, latitude });
    }
  );
};
