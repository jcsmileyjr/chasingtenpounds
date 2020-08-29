import React from 'react';
import './LandingPageHeader.css';
import { Link} from "react-router-dom";

import BlueButton from './BlueButton';
import {Container, Row, Col, Image, h1} from 'react-bootstrap';
import monster from '../assets/images/monster4.png';
import { useAuth0 } from '@auth0/auth0-react';

//This is a generic header for the landing page and non-login pages like Login and Sign-up
const LandingPageHeader = (props) => {
    const {isAuthenticated, logout, loginWithRedirect} = useAuth0();
    //const history = useHistory() // DEMO ONLY, REMOVE IN PRODUCTION, use loginWithRedirect
    //const demoSignIn = () => history.push('/signUp')// DEMO ONLY, REMOVE IN PRODUCTION use loginWithRedirect
    
    return (
        <Container fluid={true} className="background">
            <Row className="content">
                <Col xs={true} sm={true} md={true} lg={true} xl={true}>
                    <Image src={monster} fluid className="imageStyle"/>
                </Col>
                <Col xs={true} sm={true} md={6} lg={6} xl={6}>
                    <Link to="/">
                        <h1 className="mobileTitleTextSize TabletTitleTextSize textColor">
                            Chasing the <span className="redText">10 Pound</span> Monster
                        </h1>
                    </Link>
                </Col>
                {props.type === "landing" && !isAuthenticated && 
                    <Col xs={true} sm={true} md={true} lg={true} xl={true} className="rightAlignButtons">                        
                        <BlueButton buttonType="dark" action={loginWithRedirect} title="Log In" />                        
                    </Col>
                }
                {props.type === "landing" && isAuthenticated && 
                    <Col xs={true} sm={true} md={true} lg={true} xl={true} className="rightAlignButtons">                        
                        <BlueButton buttonType="dark" action={ ()=>logout()} title="Log out" />                        
                    </Col>
                }                
                {props.type === "login" && 
                    <Col xs={12} sm={true} md={true} lg={true} xl={true} className="loginPageTitleStyle">
                        <h2 className="textColor">{props.text}</h2>
                    </Col>
                }                
            </Row>
        </Container>
    );
}

export default LandingPageHeader;