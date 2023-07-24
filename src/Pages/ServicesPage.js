import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { carouselData } from "../AdditionalData/data";
import * as images from "../images/services-images";
import "../scss/index.scss";

export function ServicesPage() {
  return (
    <Container>
      {carouselData.servicesData.map((service, index) =>
        (index + 1) % 2 === 0 ? (
          <Row className="border border-3 mb-3">
            <Col sm={4}>
              <img className="w-100" src={images[`services${index + 1}`]} />
            </Col>
            <Col sm={7}>
              <div>
                <h4>{service.title}</h4>
                <h1>{service.passage}</h1>
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="border border-3 mb-3 mt-1">
            <Col sm={7}>
              <div>
                <h4>{service.title}</h4>
                <h1>{service.passage}</h1>
              </div>
            </Col>
            <Col sm={4}>
              <img className="w-100" src={images[`services${index + 1}`]} />
            </Col>
          </Row>
        )
      )}
    </Container>
  );
}
