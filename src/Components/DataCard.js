import React from "react";
import * as images from "../images/data-card";
import { carouselData } from "../AdditionalData/data";

export function DataCard({ data, index }) {
  return (
    <div className="border">
      <img className="w-100" src={images[`dataCard${index + 1}`]} />
      <h2>{data.title}</h2>
      {data.passage}
    </div>
  );
}
