import React, {useEffect, useContext} from 'react';
import {Route, useHistory} from "react-router-dom";
import LandingPage from './pages/LandingPage1';
import SignUpPage from './pages/SignUpPage';
import WeighInPage from './pages/WeighInPage';
import TeamPage from './pages/TeamPage'
import RankingPage from './pages/RankingPage';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import { store } from './Context/store';

const App = () => {
  const history = useHistory() // Use to route user between pages
  const globalState = useContext(store); // Store data into the global 'Context' and share with the entire app
  const { dispatch } = globalState; // Update data to the global 'Context' state

  const {isAuthenticated, user} = useAuth0(); // Using the auth0 Single Page SDK, updates itself when user is logged in

  // Check if the user is authenenticated every time the page is loaded, if so logs user information and true/false
  /**
   * Login API call to serverless function that make database call for all data once a user is authenticated. 
   * Check if the user is a valid. 
   * If not, send to sign-up by returning false
   * If valid:
   * 1. Organize data into an array of teams of players based on teams the current player is competing with and return
   * 2. Pass that data into global data React Context
  */
  useEffect(() => {
    if (isAuthenticated) {
      const url = 'https://chasingtenpounds.netlify.app/.netlify/functions/Login';
      const userEmail = JSON.stringify(user.email)
      axios.post(url, userEmail)
        .then(function(response){
          const data = response.data;
          dispatch({type:'LOGIN',payload: data.teamData}); // When the data has returned, update the Context global state with data
          sessionStorage.setItem('loggedIn', true);
          data.validUser ? history.push('/weighIn'): history.push('/signUp'); // Route user to weighIn screen if signedUp else to sign up screen
        })     
    } 
  }, [isAuthenticated, user, dispatch, history]);

  

  return (
    <div>
      <Route
        exact
        path="/"
        render={(props) => <LandingPage />}
      />     
      <Route path="/ranking" component={RankingPage} />
      <Route path="/weighIn" component={WeighInPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/signUp" component={SignUpPage} />
    </div>
  );
};

export default App;
