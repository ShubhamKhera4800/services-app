import React from "react";
import { SocialCard } from "./SocialCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ContactCard } from "./ContactCard";
export function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <SocialCard />
        </Col>
        <Col>
          <ContactCard />
        </Col>
      </Row>
    </Container>
  );
}
