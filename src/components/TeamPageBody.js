import React, {useState, useContext} from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';
import { useAuth0 } from '@auth0/auth0-react';
import {useHistory } from "react-router-dom";
import axios from 'axios';
import { store } from '../Context/store';
import swal from 'sweetalert';

const TeamPageBody = () => {
    const [joinTeamName, setJoinTeamName] = useState('');
    //const [newWeight, setNewWeight] = useState('');

    const {user} = useAuth0();
    const history = useHistory();
    const globalState = useContext(store); // Store data into the global 'Context' and share with the entire app
    const { dispatch } = globalState; // Update data to the global 'Context' state

    const joinTeam = (e) => {
        setJoinTeamName(e.target.value);
    }
/*
    const updateWeight = (e) => {
        setNewWeight(e.target.value);
    }
*/
    /**
     * TODO: If user is already signned in & authenicated but want to join a new team.
     * check if user is already signned in
     */
    /*Create an user data object to be saved to database, API call to update app's data, and route user to ranking page */
    const saveUserWithNewTeam = async() =>{
        if(joinTeamName !== ''){
            if(sessionStorage.getItem('loggedIn')){
                const joinTeam = {}
                joinTeam.userEmail = user.email;
                joinTeam.newTeamName = joinTeamName;// Include team name
                //joinTeam.weightLoss =  `${joinTeamName}-${newWeight}`;// Include team name and most up to date start weight
                //joinTeam.newTeamName = `${joinTeamName}-${newWeight}`;// Include team name and most up to date start weight

                const updatedPlayerDetails = JSON.stringify(joinTeam);
                //const url = 'https://chasingtenpounds.netlify.app/.netlify/functions/JoinTeam';
                const url = 'api/JoinTeam';

                //API call to update current user's list of teams they have joined
                axios.post(url, updatedPlayerDetails)
                .then(function(response){
                    const data = response.data;
                    dispatch({type:'UPDATETEAMNAME',payload: data}); 
                    history.push('/ranking');
                })
            }else{            
                const createdUser = JSON.stringify(createUser());
                sessionStorage.removeItem('userInitialWeight');
                //const url = 'https://chasingtenpounds.netlify.app/.netlify/functions/SignUp';
                const url = 'api/SignUp'

                // Sign-up API call to create a user, get all data, and update ranking
                axios.post(url, createdUser)
                    .then(function(response){
                    const data = response.data;
                    dispatch({type:'SIGNUP',payload: data.teamData}); // When the data has returned, update the Context global state with data
                    history.push('/ranking');
                    sessionStorage.setItem('loggedIn', true);
                })
            } 
        }else{
            swal("Please type in a team name");
        }
    }

    /**
     * Function to create a standard user based on user initial weight and inputted team name
     */
    const createUser = () => {
        const todayDate = new Date();
        var convertedDate = todayDate.toLocaleDateString();

        let newUser = {};
        newUser.startWeight = sessionStorage.getItem('userInitialWeight');
        //newUser.weightLoss = `${joinTeamName}-${sessionStorage.getItem('userInitialWeight')}`;
        newUser.weightLoss = sessionStorage.getItem('userInitialWeight');
        newUser.playerName = user.name;
        newUser.email = user.email;
        newUser.winner = 'false';
        newUser.lastUpdate = convertedDate
        newUser.teams = `${joinTeamName}-${sessionStorage.getItem('userInitialWeight')}`;

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
                <QuoteMonster />                             
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