import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./authPageLayout.css";
import "./team.css";

const Team = (props) => {
  return (
    <Container fluid className="teamPageBody">
      <Row className="rowContentStyle">
        <Col xs={6}>Team: Greatest Generation</Col>
        <Col xs={6} className="rightAlign">
          Week 12
        </Col>
      </Row>
      <Row className="rowContentStyle teamTitle blueBorder">
        <Col xs={2}>Rank</Col>
        <Col xs={4}>Player</Col>
        <Col xs={5}>Total Weight Loss</Col>
        <Col xs={true}></Col>
      </Row>
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </Container>
  );
};

const TeamMember = () => {
  return (
    <Row className="rowContentStyle blueBorder">
      <Col xs={2}>1</Col>
      <Col xs={4}>Old Man Wayne</Col>
      <Col xs={3}>10 lbs</Col>
      <Col xs={true}>Winner</Col>
    </Row>
  );
};

export default Team;
