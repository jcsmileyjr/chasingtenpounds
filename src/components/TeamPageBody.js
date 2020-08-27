import React, {useState} from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';
import { useAuth0 } from '@auth0/auth0-react';
import {useHistory } from "react-router-dom";

const TeamPageBody = () => {
    const [joinTeamName, setJoinTeamName] = useState('');
    const {user} = useAuth0();
    const history = useHistory();

    const joinTeam = (e) => {
        setJoinTeamName(e.target.value);
    }

    /**
     * TODO: If user is already signned in & authenicated but want to join a new team.
     */
    /*Create an user data object to be saved to database, API call to update app's data, and route user to ranking page */
    const saveUserWithNewTeam = () =>{
        if(joinTeamName !== ''){
            const createdUser = createUser();
            // Sign-up API call to create a user, get all data, and update ranking

            history.push('/ranking');
            console.log(`Team name is ${joinTeamName}`);
        }else{
            alert("Please type in a team name");
        }
    }

    /**
     * Function to create a standard user based on user initial weight and inputted team name
     * TODO: Today Date functionailty for last Update
     */
    const createUser = () => {
        let newUser = {};
        newUser.startWeight = sessionStorage.getItem('userInitialWeight');
        newUser.weightLoss = 0;
        newUser.playerName = user.name;
        newUser.email = user.email;
        newUser.winner = false;
        newUser.lastUpdate = '8/24/2020' /*TODO*/
        newUser.teams = [joinTeamName];
console.log(newUser)
        return newUser;
    }
    return (
        <Container fluid={true} className="weighInPageLayout">
            <Row className="weighInBody">
                <Col xs={12} sm={{ span: 6, offset: 3 }} >
                    <h4 className="centerElements weighInWhiteSpaceAbove">Join Team</h4>
                    <Form.Group controlId="JoinTeamName">
                    <Form.Label>Type in the name of a Team to Join</Form.Label>
                        <Form.Control type="text" placeholder="Team Name" onChange={joinTeam} />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }}  className="centerElements weighInWhiteSpaceAbove">
                    <BlueButton buttonType="light" action={saveUserWithNewTeam} title="Join Team" flat={true} wide={true}/>
                </Col>               
            </Row>
            {/** 
            <Row><Col xs={12} sm={{ span: 6, offset: 3 }} className="line"></Col></Row>
            
            <Row className="weighInBody">
                <Col xs={12} sm={{ span: 6, offset: 3 }} >
                    <h4 className="centerElements weighInWhiteSpaceAbove">Create Team</h4>
                    <Form>
                        <Form.Group controlId="CreateTeamName">
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="CreateTeamName">
                            <Form.Label>Email Team Members</Form.Label>
                            <Form.Control as="textarea" rows="5" />
                            <Form.Text>Seperate with Commas</Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }}  className="centerElements weighInWhiteSpaceAbove">
                    <BlueButton buttonType="light" action={test} title="Create Team & Send Invites" flat={true} wide={true}/>
                </Col>
                <QuoteMonster />
            </Row>
            */}
            <Row>
                <Footer />
            </Row>
             
        </Container>
    );
}

export default TeamPageBody;