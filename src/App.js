import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import LandingPage from './pages/LandingPage1';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import WeighInPage from './pages/WeighInPage';
import TeamPage from './pages/TeamPage'
import RankingPage from './pages/RankingPage';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';


 const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {isAuthenticated, loginWithRedirect, user} = useAuth0();

  useEffect(() => {
    checkIfAuthenticated();
  });

  // Check if the user is authenenticated every time the page is loaded, if so logs user information and true/false
  const checkIfAuthenticated = () => {
    if(isAuthenticated){
      setIsLoggedIn(true);
    }
    console.log(isLoggedIn);
    console.log(user);
  }

  // Use Auth0 to log in the user
  const logUserIn = async () => {
    loginWithRedirect();
  }

  return (
    <Router>
        <div>
          <Route exact path="/" render={props => <LandingPage logUser={() =>logUserIn()} />} />
          <Route path="/logIn" render={props => <LogInPage />} />
          <Route path="/signUp" render={props => <SignUpPage />} /> 
          {isLoggedIn &&
            <div>
          <Route path="/weighIn" render={props => <WeighInPage />} />
          <Route path="/team" render={props => <TeamPage />} /> 
          <Route path="/ranking" render={props => <RankingPage />} />
            </div>

          }           
  
 
      </div>
  </Router>
  );
}

export default App;