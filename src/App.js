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
  const history = useHistory()
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const {isAuthenticated, user} = useAuth0();

  // Check if the user is authenenticated every time the page is loaded, if so logs user information and true/false
  /**
   * Simuating Login API call to serverless function that make database call for all data once a user is authenticated. Then: check if the user is a valid. 
   * If not, send to sign-up by returning false
   * If valid:
   * 1. Organize data into an array of teams of players based on teams the current player is competing with and return
   * 2. Pass that data into global data (local storage or React Context)
  */
  useEffect(() => {
    if (isAuthenticated) {
      //isAuthenticatedUser(user.email);
      const ifValid = checkIfSignedUp(user.email);
      const data = organizeTeamData(user.email);
      dispatch({type:'UPDATE',payload: data}); 
      return ifValid ? history.push('/weighIn'): history.push('/signUp');     
    } 
  }, [isAuthenticated, user, dispatch, history]);

  const checkIfSignedUp = (value) => {
    let signedUp = false;
    Users.forEach((player) => {
      if(player.email === value){
        signedUp = true;
      }
    })
    console.log(`checkifSignedUp ran and the answer is ${signedUp}`);
    return signedUp;
  }

  // Based on the current user, organized by their teams
  const organizeTeamData = (userEmail) => {
    let displayTeams = []; // Array of teams
    let playerTeams = []; // Names of the team the player is on
    const currentUser = Users.find(player => player.email === userEmail); // Find current player from database of players
    
    playerTeams = currentUser.teams; // Get current player array of teams

    // Create array of array of players by team name
    playerTeams.forEach(team => {
      let teamOfPlayers = [];
      Users.forEach(player => {
        const checkIfOnSameTeam = player.teams.includes(team);
        if(checkIfOnSameTeam){
          teamOfPlayers.push(player);
        }
      });
      displayTeams.push(teamOfPlayers);// Add teams of players to array of teams
    })
    console.log(displayTeams);
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
