import styled, { css } from "styled-components";

const position1 = css`
  position: absolute;
  left: -5rem;

  @media only screen and (max-width: 510px) {
    left: -2rem;
  }
`;

const position2 = css`
  position: absolute;
  left: -5rem;
  bottom: -2rem;

  @media only screen and (max-width: 510px) {
    left: -2rem;
    bottom: -2rem;
  }
`;

const position3 = css`
  position: absolute;
  right: -5rem;

  @media only screen and (max-width: 510px) {
    right: -2rem;
  }
`;

const position4 = css`
  position: absolute;
  right: -4rem;
  bottom: -2rem;

  @media only screen and (max-width: 510px) {
    right: -2rem;
    bottom: -2rem;
  }
`;

const getRespectfulPosition = ({ pos }) => {
  if (pos === 1) return `${position1}`;
  if (pos === 2) return `${position2}`;
  if (pos === 3) return `${position3}`;
  if (pos === 4) return `${position4}`;
};

export const ImageHolderContainer = styled.div`
  width: 20rem;
  height: 20rem;

  @media only screen and (max-width: 768px) {
    width: 15rem;
    height: 15rem;
  }

  @media only screen and (max-width: 510px) {
    width: 10rem;
    height: 10rem;
  }
  ${getRespectfulPosition}
`;

export const ImageHolderImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
