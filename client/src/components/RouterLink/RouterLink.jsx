import React from "react";
// import "./RouterLink.scss";

// sc
import {
  RouterLinkContainer,
  RouterAnchorLink,
  RouterBrowserLink,
} from "./RouterLink.styles.js";

const RouterLink = ({ title, to, href, action, margin }) => {
  return href ? (
    <RouterLinkContainer margin={margin}>
      <RouterAnchorLink href={href}>{title}</RouterAnchorLink>
    </RouterLinkContainer>
  ) : (
    <RouterLinkContainer margin={margin}>
      <RouterBrowserLink to={to} {...(action ? { onClick: action } : null)}>
        {title}
      </RouterBrowserLink>
    </RouterLinkContainer>
  );
};

export default RouterLink;
