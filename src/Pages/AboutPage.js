import React from "react";
import { BasicImage } from "../images";

export function AboutPage() {
  return (
    <div className="about-page">
      <img className="w-100" src={BasicImage} />
      <h6>All About Text</h6>
    </div>
  );
}
