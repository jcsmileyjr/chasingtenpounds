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
      <Row className="rowContentStyle teamTitle">
        <Col xs={2} className="alignTeamTitle rankStyle">Rank</Col>
        <Col xs={5}>Player</Col>
        <Col xs={5}>Weight Loss</Col>
      </Row>
        {
            props.players.map((player, index) => {
                return(
                    <TeamMember rank={index} 
                                player={player.playerName} 
                                weightLoss={player.weightLoss} 
                                winner={player.winner}
                                lastUpdate = {player.lastUpdate} 
                                key={index} />
                );
            })
        }    
    </Container>
  );
};

const TeamMember = (props) => {
  return (
    <Row className="rowContentStyle teamMemberStyle ">
      <Col xs={2} className="alignTeamTitle rankStyle">{props.rank}</Col>
      <Col xs={5}>{props.player}</Col>
         
      {props.winner === 'true' &&
        <Col xs={true}>{props.weightLoss} lbs <span className="winner"> WINNER</span></Col>
      }
      {props.winner === 'false' &&
        <Col xs={5}>{props.weightLoss} lbs  {props.lastUpdate} days ago</Col> 
      }
    </Row>
  );
};

export default Team;
