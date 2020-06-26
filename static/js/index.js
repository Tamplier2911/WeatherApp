// console.log("Well, hello!");

navigator.geolocation.getCurrentPosition(({ coords }) => {
  const { latitude, longitude } = coords;
  console.log(latitude, longitude);
  /*
  const link = document.getElementById("weather_link");
  link.setAttribute(
    "href",
    `/api/v1/template/weather?address=${latitude},${longitude}`
  );
  */
});

// Implement semi-similar interaction menu for client side
// Implement navigation.geolocationgetCurrntPosition()
// Get Current Position and provide a link to /api/v1/templates/weather
// with address query string
