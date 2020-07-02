import React from "react";
// import "./Composition.scss";

// components
import ImageHolder from "../ImageHolder/ImageHolder.jsx";

// images
import reactImg from "../../assets/png/react.png";
import babelImg from "../../assets/png/babel.png";
import webpackImg from "../../assets/png/webpack.png";
import nodeImg from "../../assets/png/node.png";

// sc
import {
  CompositionContainer,
  CompositionBigCircle,
  CompositionSmallCircle,
  CompositionLink,
} from "./Composition.styles.js";

const Composition = () => {
  return (
    <CompositionContainer>
      <CompositionBigCircle>
        <CompositionSmallCircle>
          <ImageHolder alt="React" pos={1} src={reactImg} />
          <ImageHolder alt="Babel" pos={2} src={babelImg} />
          <ImageHolder alt="Webpack" pos={3} src={webpackImg} />
          <ImageHolder alt="Node" pos={4} src={nodeImg} />
        </CompositionSmallCircle>
      </CompositionBigCircle>
      <CompositionLink to="/home">Home</CompositionLink>
    </CompositionContainer>
  );
};

export default Composition;
