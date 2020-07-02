// console.log("Well, hello!");

// elements
const submit = document.getElementById("weather-submit");
const input = document.getElementById("weather-input");

if (submit && input) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const address = input.value;

    // similar behavior as clicking on a link
    window.location.href = `/api/v1/template/weather/${address}`;
  });
}

/*

navigator.geolocation.getCurrentPosition(({ coords }) => {
  const { latitude, longitude } = coords;
  console.log(latitude, longitude);
  
  const link = document.getElementById("weather_link");
  link.setAttribute(
    "href",
    `/api/v1/template/weather?address=${latitude},${longitude}`
  );
  
});

*/
