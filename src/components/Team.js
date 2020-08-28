import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./team.css";


const Team = (props) => {
  return (
    <Container fluid className="teamPageBody spaceBetweenTeams">
      <Row className="rowContentStyle">
        <Col xs={6} className="alignTeamTitle">Team {props.teamName}</Col>
        <Col xs={6} className="alignWeekTitle">
            Week {props.currentWeek}
        </Col>
      </Row>
      <Row className="rowContentStyle teamTitle blueBorder1">
        <Col xs={2} className="alignTeamTitle rankStyle">Rank</Col>
        <Col xs={4}>Player</Col>
        <Col xs={5}>Total Weight Loss</Col>
        <Col xs={true}></Col>
      </Row>
        {
            props.players.map((player, index) => {
                return(
                    <TeamMember rank={index} 
                                player={player.playerName} 
                                weightLoss={player.weightLoss} 
                                winner={player.winner} 
                                key={index} />
                );
            })
        }    
    </Container>
  );
};

const TeamMember = (props) => {
  return (
    <Row className="rowContentStyle blueBorder1 teamMemberStyle ">
      <Col xs={2} className="alignTeamTitle rankStyle">{props.rank}</Col>
      <Col xs={4}>{props.player}</Col>
      <Col xs={3}>{props.weightLoss} lbs</Col>      
      {props.winner === 'true' &&
        <Col xs={true} className="winner">WINNER</Col>
      }
      {props.winner === 'false' &&
        <Col xs={true}></Col>
      }
    </Row>
  );
};

export default Team;
