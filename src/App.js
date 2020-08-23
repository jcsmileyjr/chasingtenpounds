import React, {useEffect, useContext} from 'react';
import {Route, useHistory} from "react-router-dom";
import LandingPage from './pages/LandingPage1';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import WeighInPage from './pages/WeighInPage';
import TeamPage from './pages/TeamPage'
import RankingPage from './pages/RankingPage';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

import { store } from './Context/store';
import Users from './data.js';

const App = () => {
  const history = useHistory() // Use to route user between pages
  const globalState = useContext(store); // Store data into the global 'Context' and share with the entire app
  const { dispatch } = globalState; // Update data to the global 'Context' state

  const {isAuthenticated, user} = useAuth0(); // Using the auth0 Single Page SDK, updates itself when user is logged in

  // Check if the user is authenenticated every time the page is loaded, if so logs user information and true/false
  /**
   * Simuating Login API call to serverless function that make database call for all data once a user is authenticated. 
   * Check if the user is a valid. 
   * If not, send to sign-up by returning false
   * If valid:
   * 1. Organize data into an array of teams of players based on teams the current player is competing with and return
   * 2. Pass that data into global data React Context
  */
  useEffect(() => {
    if (isAuthenticated) {
      const ifValid = checkIfSignedUp(user.email); // TODO: SHOULD BE IN THE LOGIN API FUNCTION
      const data = organizeTeamData(user.email); // TODO: SHOULD BE IN THE LOGIN API FUNCTION, 
      dispatch({type:'LOGIN',payload: data}); // When the data has returned, update the Context global state with data
      return ifValid ? history.push('/weighIn'): history.push('/signUp'); // Route user to weighIn screen if signedUp else to sign up screen     
    } 
  }, [isAuthenticated, user, dispatch, history]);

  // TODO: SHOULD BE IN THE LOGIN API FUNCTION
  // Method to check if the user.email from auth0 is matches an email in our database (current is a demo database)
  const checkIfSignedUp = (value) => {
    let signedUp = false;
    Users.forEach((player) => {
      if(player.email === value){
        signedUp = true;
      }
    })
    return signedUp;
  }

  // TODO: SHOULD BE IN THE LOGIN API FUNCTION
  // Based on the current user, organize the data by their teams
  const organizeTeamData = (userEmail) => {
    let displayTeams = []; // Array of teams
    let playerTeams = []; // Names of the team the player is on

    const currentUser = Users.find(player => player.email === userEmail); // Find current player from database of players
    
    playerTeams = currentUser.teams; // Get current player array of teams

    // Create array of array of players by team name
    playerTeams.forEach(team => {
      let teamDetails = {};
      teamDetails.teamName = team;
      teamDetails.currentWeek = 1;/**TODO: Functionality & data to dynamically get current week */
      let teamOfPlayers = [];
      Users.forEach(player => {
        const checkIfOnSameTeam = player.teams.includes(team);
        if(checkIfOnSameTeam){
          /*TODO: Strip all players of  un-needed data*/
          teamOfPlayers.push(player);
        }
      });
      teamDetails.players = teamOfPlayers; // Add teams of players to array of teams

      displayTeams.push(teamDetails);// Add teams of players to array of teams
    })
//console.log(displayTeams);
    return displayTeams;
  }

  return (
    <div>
      <Route
        exact
        path="/"
        render={(props) => <LandingPage />}
      />
      <Route path="/logIn" component={LogInPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/weighIn" component={WeighInPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/ranking" component={RankingPage} />
    </div>
  );
};

export default App;
