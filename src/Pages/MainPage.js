import React from "react";
import { BasicImage } from "../images";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { carouselData } from "../AdditionalData/data";
import * as images from "../images";
import "../scss/index.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DataCard } from "../Components/DataCard";

export function MainPage() {
  function CarouselItems({ image, data }) {
    return (
      <Paper>
        <Container>
          <Row>
            <Col sm={4}>
              <img
                className="w-100"
                src={images[`carousel${image + 1}`]}
                id={`image-${image}`}
              />
            </Col>
            <Col className="carousel-text">
              <h3>{data.title}</h3>
              {data.passage}
            </Col>
          </Row>
        </Container>{" "}
      </Paper>
    );
  }

  return (
    <div className="main-page">
      <img className="w-100" src={BasicImage} />
      <h1>The App</h1>
      <Carousel>
        {carouselData.homeCarousel.map((i, index) => (
          <CarouselItems image={index} key={index} data={i} />
        ))}
      </Carousel>
      <div className="mt-4">
        <Container>
          <Row>
            {carouselData.dataCards.map((dataCard, index) => (
              <Col sm={4} className="mt-2">
                <DataCard data={dataCard} index={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
