import React, {useContext} from "react";
import "./authPageLayout.css";
import './rankingPageBody.css';

import Team from './Team'
import { store } from '../Context/store';

const RankingPageBody = () => {
  const globalState = useContext(store);
  const { state } = globalState;

  return (
    <main>
        {state.map((team,index) => {
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
