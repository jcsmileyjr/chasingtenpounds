import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import LandingPage from './pages/LandingPage1';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import WeighInPage from './pages/WeighInPage';
import TeamPage from './pages/TeamPage'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={props => <LandingPage />} />
        <Route path="/logIn" render={props => <LogInPage />} />
        <Route path="/signUp" render={props => <SignUpPage />} />
        <Route path="/weighIn" render={props => <WeighInPage />} />
        <Route path="/team" render={props => <TeamPage />} /> 
    </div>
  </Router>
  );
}

export default App;
