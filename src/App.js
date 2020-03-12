import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={props => <LandingPage />} />
        <Route path="/logIn" render={props => <LogInPage />} />
    </div>
  </Router>
  );
}

export default App;
