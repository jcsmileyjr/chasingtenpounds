import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./authPageLayout.css";
import './rankingPageBody.css';

import Team from './Team'
import Footer from "../components/LandingPageFooter";

const RankingPageBody = () => {
  return (
    <main>
      <Team />
    </main>
  );
};

export default RankingPageBody;
