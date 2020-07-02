import "./ImageHolder.scss";
import React from "react";

// sc
import { ImageHolderContainer, ImageHolderImg } from "./ImageHolder.styles.js";

const ImageHolder = ({ alt, src, pos }) => (
  <ImageHolderContainer pos={pos}>
    <ImageHolderImg src={src} alt={alt} />
  </ImageHolderContainer>
);

export default ImageHolder;
