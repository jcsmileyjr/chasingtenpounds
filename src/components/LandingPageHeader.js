import React from 'react';
import './LandingPageHeader.css';

import BlueButton from './BlueButton';
import {Container, Row, Col, Image, h1} from 'react-bootstrap';
import monster from '../assets/images/monster4.png';

const LandingPageHeader = () => {
    const test = () =>{
        alert("hello world");
    }

    return (
        <Container fluid={true} className="background">
            <Row className="content">
                <Col xs={6} sm={2} md={2} lg={true} xl={true}>
                    <Image src={monster} fluid className="imageStyle"/>
                </Col>
                <Col xs={6} sm={5} md={5} lg={6} xl={true}>
                    <h1 className="mobileTitleTextSize">Chasing the <span className="redText">10 lb</span> Monster</h1></Col>
                <Col xs={6} sm={true} md={true} lg={true} xl={true} className="rightAlignButtons paddingBetweenLogoButtons">
                    <BlueButton buttonType="dark" action={test} title="Sign Up" />
                </Col>
                <Col xs={6} sm={true} md={true} lg={true} xl={true} className="rightAlignButtons">
                    <BlueButton buttonType="dark" action={test} title="Log In" />
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPageHeader;