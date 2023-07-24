import React from "react";
import { carouselData } from "../AdditionalData/data";
import { carousel1, carousel2 } from "../images";

export function CarouselItems() {
  return carouselData.homeCarousel.map((item, index) => (
    <div>
      <h1>{index}</h1>
      <img src={`carousel${index + 1}`} />
      {item}
    </div>
  ));
}
