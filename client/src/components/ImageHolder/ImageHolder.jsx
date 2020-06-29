import "./ImageHolder.scss";
import React from "react";

const ImageHolder = ({ alt, src, pos }) => (
  <div className={`img-wrap pos${pos}`}>
    <img src={src} alt={alt} className="img"></img>
  </div>
);

export default ImageHolder;
