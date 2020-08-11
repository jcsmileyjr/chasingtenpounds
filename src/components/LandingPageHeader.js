import React from 'react';
import './LandingPageHeader.css';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import BlueButton from './BlueButton';
import {Container, Row, Col, Image, h1} from 'react-bootstrap';
import monster from '../assets/images/monster4.png';

//This is a generic header for the landing page and non-login pages like Login and Sign-up
const LandingPageHeader = (props) => {

    const {loginWithRedirect} = useAuth0();

    const logIn = () => {
        let test = loginWithRedirect();
        console.log(test);
    }

    return (
        <Container fluid={true} className="background">
            <Row className="content">
                <Col xs={4} sm={2} md={2} lg={true} xl={true}>
                    <Image src={monster} fluid className="imageStyle"/>
                </Col>
                <Col xs={8} sm={5} md={6} lg={6} xl={6}>
                    <Link to="/">
                        <h1 className="mobileTitleTextSize TabletTitleTextSize textColor">
                            Chasing the <span className="redText">10 Pound</span> Monster
                        </h1>
                    </Link>
                </Col>
                {props.type === "landing" && 
                    <Col xs={12} sm={true} md={true} lg={true} xl={true} className="rightAlignButtons">
                        
                            <BlueButton buttonType="dark" action={props.logUser} title="Log In" />
                        
                    </Col>
                }{props.type === "login" && 
                    <Col xs={12} sm={true} md={true} lg={true} xl={true} className="loginPageTitleStyle">
                        <h2 className="textColor">{props.text}</h2>
                    </Col>
                }                
            </Row>
        </Container>
    );
}

export default LandingPageHeader;