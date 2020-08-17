import React, {useEffect} from 'react';
import {Route, useHistory} from "react-router-dom";
import LandingPage from './pages/LandingPage1';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import WeighInPage from './pages/WeighInPage';
import TeamPage from './pages/TeamPage'
import RankingPage from './pages/RankingPage';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

import Users from './data.js';

// Dummy data of saved email addresses
const savedUsers = [
  'jcsmileyjr@gmail.com',
  'jsmiley@bellsouth.net'
]

const App = () => {
  const history = useHistory()

  const {isAuthenticated, loginWithRedirect, user} = useAuth0();

  // Check if the user is authenenticated every time the page is loaded, if so logs user information and true/false
  useEffect(() => {
    if (isAuthenticated) {
      isSavedUser(user.email);
    } 
  }, );

  // Use Auth0 to log in the user
  const logUserIn = () => {
    loginWithRedirect();
  }

  // Method to check if a user is already sign up for the service with an saved email address. 
  const isSavedUser = (value) => {
    const ifValid = checkIfSignedUp(value);
    return ifValid ? history.push('/weighIn'): history.push('/signUp');
  }

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

  return (
    <div>
      <Route
        exact
        path="/"
        render={(props) => <LandingPage logUser={() => logUserIn()} />}
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
