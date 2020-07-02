import styled, { css } from "styled-components";

const sharedParagraphStyles = css`
  font-size: 2.2rem;
  text-align: center;
`;

export const WeatherPageSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const WeatherPageHeader = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2em;
`;

export const WeatherPageLinksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeatherPageErrorParagraph = styled.p`
  ${sharedParagraphStyles}
`;

export const WeatherPageImageWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  margin-bottom: 6rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const WeatherPageImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const WeatherPageDataParagraph = styled.p`
  ${sharedParagraphStyles}
`;

export const WeatherPageForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40rem;

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const WeaptherPageInput = styled.input`
  margin-bottom: 2rem;
  border: none;
  outline: none;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  color: black;

  border: 1px solid black;
  padding: 1rem;
`;

export const WeatherPageButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;

  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-transform: uppercase;
  font-size: 1.6rem;

  border: 0.1px solid black;
  background-color: white;

  padding: 1rem;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;
