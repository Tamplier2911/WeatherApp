import styled from "styled-components";

import { Link } from "react-router-dom";

export const RouterLinkContainer = styled.div`
  margin-bottom: 1rem;
  margin-top: ${({ margin }) => (margin ? "5rem" : "0rem")};
`;

export const RouterAnchorLink = styled.a`
  &:link,
  &:visited {
    font-size: 2rem;
    text-decoration: none;
    color: var(--cl-font);
    transition: color 0.3s;
  }

  &:active,
  &:hover {
    color: var(--cl-blue);
  }
`;

export const RouterBrowserLink = styled(Link)`
  &:link,
  &:visited {
    font-size: 2rem;
    text-decoration: none;
    color: var(--cl-font);
    transition: color 0.3s;
  }

  &:active,
  &:hover {
    color: var(--cl-blue);
  }
`;
