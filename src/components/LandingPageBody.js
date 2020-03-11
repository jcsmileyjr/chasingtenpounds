import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import "./LandingPageBody.css";
import BlueButton from '../components/BlueButton';

import monster from '../assets/images/monster3.png';
import winnerVideo from '../assets/images/10MON-old-v1.gif';
import awardRibbon from '../assets/images/award-ribbon.png';
import logInPic from '../assets/images/logIn-old.PNG';
import weighInPic from '../assets/images/WeighIn-old.PNG';
import rankingPic from '../assets/images/rank-10mon.PNG';
import monsterA from '../assets/images/monster-A.png';
import monsterB from '../assets/images/monster-B.png';
import monsterC from '../assets/images/monster-C.png';
import monsterD from '../assets/images/monster-D.png';
import monsterE from '../assets/images/monster-E.png';
import monsterF from '../assets/images/monster-F.png';
import monsterParty from '../assets/images/monster-party.png';
import ImagesMonsters from '../components/Image&Monsters';
import MonsterSteps from '../components/MonsterSteps';

const LandingPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        alert("WIP: Testing that the button works!");
    }
    return (
        <Container fluid>
            <Row>
                <Col xs={{span:12, order:2}} sm={{order:1}} md={{order:1}} lg={{order:1}} xl={{span: 4,order:1}} className="landingPageBodyImageContainerStyle">
                    <Image src={awardRibbon} fluid className="landingBodyImage"/>
                    <div className="floatingText centerElements">
                        <h1>Challenge</h1>
                        <p className="imageText">Family, Friends, Co-workers</p>
                        <p className="imageText">To who can lose</p>
                        <h2 className="spaceBetweenLetters">10 lbs</h2>
                        <h2 className="spaceBetweenLetters">The Fastest</h2>
                    </div>
                </Col>
                <Col xs={{span:12, order:1}} sm={{order:2}} md={{order:2}} lg={{order:2}} xl={{span: 8,order:2}} className="centerContent">
                    <p className="CTATitle">Do you want to Chase the <span style={{color:"#FF0000"}}>10 Pound </span>Monster?</p>
                    <p>10 pounds is an attainable, measureable, and visible fitness goal. 
                    The best part is it can be done in a short time period. So choose, do 
                    you want or need to chase the 10 Pound Monster?
                    </p>
                    <div className="centerElements">
                        <Image src={monster} fluid className="primaryMonsterStyle animatedMonster"/>
                    </div>                    
                </Col>
            </Row>
            <Row className="whiteSpaceAboveRow">
                <Col xs={12} sm={true} md={true} lg={true} xl={4} className="centerContent">
                <h2 className="centerElements">Quick & Simple to Use, Only Show Weight Loss</h2>
                    <BlueButton buttonType="light" action={test} title="Sign Up Today" flat={false}  />                    
                </Col>
                <Col xs={12} sm={true} md={true} lg={true} xl={8} >
                    <Image src={winnerVideo} fluid />
                </Col>
            </Row>
            <Row className="whiteSpaceAboveRow">
                <Col xs={12} className="centerContent">
                    <h3 style={{width:"80vw", textAlign:"center"}} >Create a team name and send the challenge to your team for a weight loss match</h3>
                </Col>
                <Col xs={12} className="centerElements minorWhiteSpace">
                    <BlueButton buttonType="light" action={test} title="Sign Up" flat={false} />
                </Col>
                <MonsterSteps monster1={monsterA} textA="Step 1: Sign Up" textB="I'm Ready" />
                <MonsterSteps monster1={monsterB} monster2={monsterC} textA="Step 2: Join or Create a Team" textB="Join the FUN!!!" />
                <MonsterSteps monster1={monsterParty}  textA="Step 3: See Who's Winning" textB=".....Ready, Set, GO!!!!!" />
            </Row>
        </Container>
    );
}

export default LandingPageBody;