import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./authPageLayout.css";
import './rankingPageBody.css';

import Team from './Team'
import Footer from "../components/LandingPageFooter";

const RankingPageBody = () => {
  return (
    <main>
      <Team teamName="Greatest Generation"
            currentWeek="12"
            rank="1"
            player="Old Man"
            weightLoss="10"
            winner= {true}
      />
    </main>
  );
};

export default RankingPageBody;
