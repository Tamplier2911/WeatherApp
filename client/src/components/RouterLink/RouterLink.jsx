import React from "react";
import "./RouterLink.scss";

import { Link } from "react-router-dom";

const RouterLink = ({ title, to, href, action, margin }) => {
  return href ? (
    <div className={`link__container ${margin ? "weatherSection__link" : ""}`}>
      <a className="link__element" href={href}>
        {title}
      </a>
    </div>
  ) : (
    <div className={`link__container ${margin ? "weatherSection__link" : ""}`}>
      <Link
        className="link__element"
        to={to}
        {...(action ? { onClick: action } : null)}
      >
        {title}
      </Link>
    </div>
  );
};

export default RouterLink;
