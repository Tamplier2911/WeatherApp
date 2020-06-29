import React from "react";
import "./Composition.scss";
import { Link } from "react-router-dom";

// components
import ImageHolder from "../ImageHolder/ImageHolder.jsx";

// images
import reactImg from "../../assets/png/react.png";
import babelImg from "../../assets/png/babel.png";
import webpackImg from "../../assets/png/webpack.png";
import nodeImg from "../../assets/png/node.png";

const Composition = () => {
  return (
    <div className="composition">
      <div className="composition__bigCircle">
        <div className="composition__smallCircle">
          <ImageHolder alt="React" pos={1} src={reactImg} />
          <ImageHolder alt="Babel" pos={2} src={babelImg} />
          <ImageHolder alt="Webpack" pos={3} src={webpackImg} />
          <ImageHolder alt="Node" pos={4} src={nodeImg} />
        </div>
      </div>
      <Link className="composition__button" to="/home">
        Home
      </Link>
    </div>
  );
};

export default Composition;
