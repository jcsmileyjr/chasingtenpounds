import React from "react";
import "./authPageLayout.css";
import './rankingPageBody.css';

import Team from './Team'
//import Footer from "../components/LandingPageFooter";
import data from '../data.json';

const RankingPageBody = () => {
  return (
    <main>
        {data.map((team,index) => {
          return (
            <Team teamName={team.teamName}
                  currentWeek={team.currentWeek}
                  players = {team.players}
                  key={index}                  
            />
          );
          
        })}
    </main>
    
  );
};

export default RankingPageBody;
