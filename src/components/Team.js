import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./authPageLayout.css";
import "./team.css";

const Team = (props) => {
  return (
    <Container fluid className="teamPageBody">
      <Row className="rowContentStyle">
        <Col xs={6}>{props.teamName}</Col>
        <Col xs={6} className="rightAlign">
            {props.currentWeek}
        </Col>
      </Row>
      <Row className="rowContentStyle teamTitle blueBorder">
        <Col xs={2}>Rank</Col>
        <Col xs={4}>Player</Col>
        <Col xs={5}>Total Weight Loss</Col>
        <Col xs={true}></Col>
      </Row>
      <TeamMember rank={props.rank} player={props.player} weightLoss={props.weightLoss} winner={props.winner} />
      <TeamMember rank={props.rank} player={props.player} weightLoss={props.weightLoss} winner={props.winner} />
      <TeamMember rank={props.rank} player={props.player} weightLoss={props.weightLoss} winner={props.winner} />
    </Container>
  );
};

const TeamMember = (props) => {
  return (
    <Row className="rowContentStyle blueBorder">
      <Col xs={2}>{props.rank}</Col>
      <Col xs={4}>{props.player}</Col>
      <Col xs={3}>{props.weightLoss} lbs</Col>
      <Col xs={true}>{props.winner && "winner"}</Col>
    </Row>
  );
};

export default Team;
