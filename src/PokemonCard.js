import React from "react";
import "./PokemonCard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PokemonCard({ pokemon, type, icon, hitPoints }) {
  return (
    <Container className="pokemon-card">
      <Row>
        <Col id="pokemon-name">{pokemon}</Col>
        <Col id="hit-points">{hitPoints} HP</Col>
      </Row>
      <Row>
        <Col>
          <img src={icon} alt="pokemon icon" />
        </Col>
      </Row>
      <Row>
        <Col>Type: {type}</Col>
      </Row>
    </Container>
  );
}
