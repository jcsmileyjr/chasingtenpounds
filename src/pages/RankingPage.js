import React from "react";

import Header from "../components/AuthUserHeader";
//import RankingPageBody from '../components/RankingPageBody';

const RankingPage = () => {
  return (
    <div>
      <Header type="authenticated" text="Team Ranking" />
      <h1>Hello Ranking Page</h1>
    </div>
  );
};

export default RankingPage;
