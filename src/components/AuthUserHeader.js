import React from 'react';
import './LandingPageHeader.css';
import { Link } from "react-router-dom";

import {Container, Row, Col, Image, h1} from 'react-bootstrap';
import monster from '../assets/images/monster4.png';
import menu from '../assets/images/menu3.png';

//This is a generic header for the landing page and non-login pages like Login and Sign-up
const AuthUserHeader = (props) => {

    return (
        <Container fluid={true} className="background">
            <Row className="content">
                <Col xs={3} >
                    <Image src={monster} fluid className="imageStyle"/>
                </Col>
                <Col xs={6} >
                    <Link to="/">
                        <h1 className="mobileTitleTextSize TabletTitleTextSize textColor">
                            Chasing the <span className="redText">10 Pound</span> Monster
                        </h1>
                    </Link>
                </Col>
                <Col xs={3} className="rightAlignButtons">
                    <Image src={menu} fluid className="menu"/>
                </Col>               
                <Col xs={12}>
                    <h2 className="authPageTitleStyle textColor">{props.text}</h2>
                </Col>                
            </Row>
        </Container>
    );
}

export default AuthUserHeader;