import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const pulseAnimation = css`
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
    70% {
      -moz-box-shadow: 0 0 0 15px rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 15px rgba(204, 169, 44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
`;

export const CompositionContainer = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompositionBigCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 50rem;
  background-color: black;
  border-radius: 60%;

  @media only screen and (max-width: 768px) {
    width: 40rem;
    height: 40rem;
  }

  @media only screen and (max-width: 510px) {
    width: 29.6rem;
    height: 29.6rem;
  }
`;

export const CompositionSmallCircle = styled.div`
  position: relative;
  width: 49.6rem;
  height: 49.6rem;
  background-color: white;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    width: 39.6rem;
    height: 39.6rem;
  }

  @media only screen and (max-width: 510px) {
    width: 28.6rem;
    height: 28.6rem;
  }
`;

export const CompositionLink = styled(Link)`
  ${pulseAnimation}
  cursor: pointer;
  background-color: white;
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 2rem;

  border: black 1px solid;

  text-transform: uppercase;

  transition: color 0.3s;

  &:hover {
    animation: pulse 2s infinite linear;
    color: black;
  }
`;
