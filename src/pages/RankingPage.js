import React from "react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Header from "../components/AuthUserHeader";
import RankingPageBody from '../components/RankingPageBody';

const RankingPage = () => {
  return (
    <div>
      <Header type="authenticated" text="Team Ranking" />
      <RankingPageBody />
    </div>
  );
};

export default withAuthenticationRequired(RankingPage, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
