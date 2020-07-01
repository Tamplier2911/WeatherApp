import "./WeatherPage.scss";
import React, { useState } from "react";
import axios from "axios";

// components
import RouterLink from "../../components/RouterLink/RouterLink.jsx";

const WeatherPage = () => {
  const [addressState, setAddressState] = useState({
    address: "",
    requested: true,
    weather: {},
    error: {},
  });
  const { address, requested, weather, error } = addressState;

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (address) {
      setAddressState({ ...addressState, requested: true });
      try {
        const res = await axios({
          method: "GET",
          url: `/api/v1/weather/${address}`,
        });
        console.log(
          res.data.data,
          "place / temperature / weather_descriptions / weather_icons"
        );
        const weather = {
          place: res.data.data.place,
          temperature: res.data.data.temperature,
          feelslike: res.data.data.feelslike,
          desc: res.data.data.weather_descriptions[0],
          weather_icons: res.data.data.weather_icons[0],
        };
        setAddressState({
          ...addressState,
          weather,
        });
      } catch (err) {
        console.log(err.response.data, "error / errorMessage");
        const error = {
          name: err.response.data.error,
          message: err.response.data.errorMessage,
        };
        setAddressState({
          ...addressState,
          error,
        });
      }
    }
  };

  console.log("re-rendered");

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setAddressState({ ...addressState, [name]: value });
  };

  return (
    <section className="weatherSection">
      <h1 className="weatherSection__title">Weather Forecast:</h1>
      <div className="weatherSection__container">
        {requested && error.name ? (
          <React.Fragment>
            <p className="weatherSection__error">{error.name}</p>
            <p className="weatherSection__error">{error.message}</p>
            <RouterLink
              title="Try again?"
              action={(e) => {
                e.preventDefault();
                setAddressState({
                  ...addressState,
                  requested: false,
                  error: {},
                });
              }}
              to="/"
            />
          </React.Fragment>
        ) : requested && weather.place ? (
          <React.Fragment>
            <div className="weatherSection__imgwrap">
              <img
                src={weather.weather_icons}
                alt="weather icon"
                className="weatherSection__img"
              />
            </div>
            <p className="weatherSection__data">{weather.place}</p>
            <p className="weatherSection__data">
              Сurrent temperature is {weather.temperature}°C and it feels like{" "}
              {weather.feelslike}°C. {weather.desc}.
            </p>
            <RouterLink margin={true} title="Back to home?" to="/home" />
          </React.Fragment>
        ) : (
          <form
            className="weatherSection__form"
            autoComplete="off"
            onSubmit={(e) => onFormSubmit(e)}
          >
            <input
              className="weatherSection__input"
              type="text"
              placeholder="Location or address..."
              onChange={(e) => onInputChange(e)}
              name="address"
              value={address}
            />
            <button className="weatherSection__button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default WeatherPage;
