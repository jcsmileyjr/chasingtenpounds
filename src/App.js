import React, {useState, useEffect} from 'react';
import {Route, useHistory} from "react-router-dom";
import LandingPage from './pages/LandingPage1';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import WeighInPage from './pages/WeighInPage';
import TeamPage from './pages/TeamPage'
import RankingPage from './pages/RankingPage';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {isAuthenticated, loginWithRedirect, user} = useAuth0();

  // Check if the user is authenenticated every time the page is loaded, if so logs user information and true/false
  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
      history.push("/weighIn");
    } else {
      setIsLoggedIn(false);
      history.push('/signUp')
    }
    console.log(isLoggedIn);
    console.log(user);
  }, [isAuthenticated, isLoggedIn, user, history]);

  // Use Auth0 to log in the user
  const logUserIn = async () => {
    loginWithRedirect();
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
      {isLoggedIn && (
        <div>
          <Route path="/weighIn" component={WeighInPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/ranking" component={RankingPage} />
        </div>
      )}
    </div>
  );
};

export default App;
