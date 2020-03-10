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

const LandingPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        alert("hello world");
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
                        <h2 className="spaceBetweenLetters">
                            10 lbs
                        </h2>
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
                        <Image src={monster} fluid className="imageStyle animatedMonster"/>
                    </div>                    
                </Col>
            </Row>
            <Row className="whiteSpaceAboveRow">
                <Col xs={12} sm={true} md={true} lg={true} xl={4} className="centerContent">
                    <p>See who is in</p>
                    <h2>1st PLACE</h2>
                </Col>
                <Col xs={12} sm={true} md={true} lg={true} xl={8} >
                <Image src={winnerVideo} fluid />
                </Col>
            </Row>
            <Row className="whiteSpaceAboveRow">
                <Col xs={12} className="centerElements">
                    <h1>Quick & Simple to Use, Only Show Weight Loss</h1>
                </Col>
                <Col xs={12} sm={true}>
                    <Col className="centerElements imageTitle"><p className="stepStyle">Log In</p></Col>
                    <Col className="centerElements">
                        <Image src={logInPic} fluid/>
                    </Col>
                    <Col className="centerElements minorWhiteSpace">
                        <Image src={monsterA} fluid className="monsterImage spinningMonster"/>
                        <p>I'm Ready</p>
                    </Col>
                </Col>
                <Col xs={12} sm={true}>
                    <Col className="centerElements imageTitle"><p className="stepStyle">Input Your Weight</p></Col>
                    <Col className="centerElements">
                        <Image src={weighInPic} fluid/>
                    </Col>
                    <Col className="centerElements minorWhiteSpace">
                        <Image src={monsterB} fluid className="monsterImage spinningMonster"/>
                        <p>My Weight went Down, YEAH!!!!!</p>
                    </Col>
                </Col>
                <Col xs={12} sm={true}>
                    <Col className="centerElements imageTitle"><p className="stepStyle">See Your Rank</p></Col>
                    <Col className="centerElements">
                        <Image src={rankingPic} fluid />
                    </Col>
                    <Col className="centerElements minorWhiteSpace">
                        <Image src={monsterParty} fluid className="monsterImage spinningMonster"/>
                        <p>Ya'll Can't Catch Me!!!!!</p>
                    </Col>
                </Col>
                <Col xs={12} className="centerElements">
                    <BlueButton buttonType="light" action={test} title="Let's get Started" flat={false} />
                </Col>
            </Row>
            <Row className="whiteSpaceAboveRow">
                <Col xs={12} className="centerContent">
                    <h3 style={{width:"80vw", textAlign:"center"}} >Create a team name and send the challenge to your team for a weight loss match</h3>
                </Col>
                <Col xs={12} className="centerElements minorWhiteSpace">
                    <BlueButton buttonType="light" action={test} title="Create a Team" flat={false} />
                </Col>
                <Col xs={12} sm={true} className="minorWhiteSpace">
                    <Col className="centerElements imageTitle section4ImageTitle"><p className="stepStyle">Step 1: Sign Up</p></Col>
                    <Col className="centerElements">
                        <Image src={monsterA} fluid className="monsterImage"/>
                        <p>I'm Ready</p>                    
                    </Col>
                </Col>
                <Col xs={12} sm={true} className="minorWhiteSpace">
                    <Col className="centerElements imageTitle section4ImageTitle"><p className="stepStyle">Step 2: Join or Create a Team</p></Col>
                    <Col className="centerMonsterImages">
                        <Image src={monsterA} fluid className="monsterImage"/>
                        <Image src={monsterC} fluid className="monsterImage"/>                                            
                    </Col>
                    <Col><p className="centerElements">Join the FUN!!!</p></Col>
                </Col>
                <Col xs={12} sm={true} className="minorWhiteSpace">
                    <Col className="centerElements imageTitle section4ImageTitle"><p className="stepStyle">Step 3: See Who's Winning</p></Col>
                    <Col className="centerMonsterImages">
                        <Image src={monsterD} fluid className="monsterImage"/>
                        <Image src={monsterE} fluid className="monsterImage"/>
                        <Image src={monsterF} fluid className="monsterImage"/>                                            
                    </Col>
                    <Col><p className="centerElements">.....Ready, Set, GO!!!!!</p></Col>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPageBody;