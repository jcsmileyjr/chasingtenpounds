import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import "./LandingPageBody.css";

import winnerPic from '../assets/images/winner.png';
import monster from '../assets/images/monster3.png';

const LandingPageBody = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={{span:12, order:2}} sm={{order:1}} md={{order:1}} lg={{order:1}} xl={{span: 4,order:1}} className="landingPageBodyImageContainerStyle test1">
                    <Image src={winnerPic} fluid className="landingBodyImage"/>
                    <div className="floatingText centerElements">
                        <h1>Challenge</h1>
                        <p className="imageText">Family, Friends, Co-workers</p>
                        <p className="imageText">To who can lose</p>
                        <h2 style={{color:"#FF0000"}} className="spaceBetweenLetters">
                            10 lbs
                        </h2>
                        <h2 className="spaceBetweenLetters">The Fastest</h2>
                    </div>
                </Col>
                <Col xs={{span:12, order:1}} sm={{order:2}} md={{order:2}} lg={{order:2}} xl={{span: 8,order:2}} className="test2">
                    <p className="CTATitle">Do you want to Chase the <span style={{color:"#FF0000"}}>10 Pound </span>Monster?</p>
                    <p>10 pounds is an attainable, measureable, and visible fitness goal. 
                    The best part is it can be done in a short time period. So choose, do 
                    you want or need to chase the 10 Pound Monster?
                    </p>
                    <div className="centerElements">
                    <Image src={monster} fluid className="imageStyle"/>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPageBody;