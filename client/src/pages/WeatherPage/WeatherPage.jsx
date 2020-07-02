// import "./WeatherPage.scss";
import React, { useState } from "react";
import axios from "axios";

// components
import RouterLink from "../../components/RouterLink/RouterLink.jsx";

// sc
import {
  WeatherPageSection,
  WeatherPageHeader,
  WeatherPageLinksContainer,
  WeatherPageErrorParagraph,
  WeatherPageImageWrapper,
  WeatherPageImage,
  WeatherPageDataParagraph,
  WeatherPageForm,
  WeaptherPageInput,
  WeatherPageButton,
} from "./WeatherPage.styles.js";

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
      try {
        const res = await axios({
          method: "GET",
          url: `/api/v1/weather/${address}`,
        });
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
          requested: true,
        });
      } catch (err) {
        const error = {
          name: err.response.data.error,
          message: err.response.data.errorMessage,
        };
        setAddressState({
          ...addressState,
          error,
          requested: true,
        });
      }
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setAddressState({ ...addressState, [name]: value });
  };

  return (
    <WeatherPageSection>
      <WeatherPageHeader>Weather Forecast:</WeatherPageHeader>
      <WeatherPageLinksContainer>
        {requested && error.name ? (
          <React.Fragment>
            <WeatherPageErrorParagraph>{error.name}</WeatherPageErrorParagraph>
            <WeatherPageErrorParagraph>
              {error.message}
            </WeatherPageErrorParagraph>
            <RouterLink
              title="Try again?"
              action={(e) => {
                e.preventDefault();
                setAddressState({
                  ...addressState,
                  requested: false,
                  address: "",
                  error: {},
                });
              }}
              to="/"
              margin={true}
            />
          </React.Fragment>
        ) : requested && weather.place ? (
          <React.Fragment>
            <WeatherPageImageWrapper>
              <WeatherPageImage
                src={weather.weather_icons}
                alt="weather icon"
              />
            </WeatherPageImageWrapper>
            <WeatherPageDataParagraph>{weather.place}</WeatherPageDataParagraph>
            <WeatherPageDataParagraph>
              Сurrent temperature is {weather.temperature}°C and it feels like{" "}
              {weather.feelslike}°C. {weather.desc}.
            </WeatherPageDataParagraph>
            <RouterLink margin={true} title="Back to home?" to="/home" />
          </React.Fragment>
        ) : (
          <WeatherPageForm autoComplete="off" onSubmit={(e) => onFormSubmit(e)}>
            <WeaptherPageInput
              type="text"
              placeholder="Location or address..."
              onChange={(e) => onInputChange(e)}
              name="address"
              value={address}
            />
            <WeatherPageButton type="submit">Submit</WeatherPageButton>
          </WeatherPageForm>
        )}
      </WeatherPageLinksContainer>
    </WeatherPageSection>
  );
};

export default WeatherPage;
