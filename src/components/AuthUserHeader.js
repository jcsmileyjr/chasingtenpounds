import React, {useState} from 'react';
import './LandingPageHeader.css';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

import {Container, Row, Col, Image, Modal, h1, h2} from 'react-bootstrap';
import BlueButton from './BlueButton';
import monster from '../assets/images/monster4.png';
import menu from '../assets/images/menu3.png';

//This is a generic header for the landing page and non-login pages like Login and Sign-up
const AuthUserHeader = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const {logout} = useAuth0();

    const openMenu = () => {setShowMenu(true)}

    return (
        <Container fluid={true} className="background">
            <Row className="content">
                <Col xs={3} >
                    <Image src={monster} fluid className="imageStyle"/>
                </Col>
                <Col xs={6} >
                    <h1 className="mobileTitleTextSize TabletTitleTextSize textColor">
                        Chasing the <span className="redText">10 Pound</span> Monster
                    </h1>
                </Col>
                <Col xs={3} className="rightAlignButtons">
                    <Image src={menu} fluid className="menu" onClick={() => openMenu()}/>
                </Col>               
                <Col xs={12}>
                    <h2 className="authPageTitleStyle textColor">{props.text}</h2>
                </Col>                
            </Row>
            <Modal show={showMenu} onHide={() => setShowMenu(false)} className="scoreboardBackground" >
                <Modal.Header closeButton>
                    <Row className="centerContent centerTitle">
                        <h3>Chasing the <span className="redText">10 Pound</span> Monster</h3>
                    </Row>
                </Modal.Header>
                <Modal.Body>                    
                    <Row><Link to="/ranking"><h2>Ranking</h2></Link></Row>
                    <Row><Link to="/weighIn"><h2>Weigh In</h2></Link></Row>
                    <Row><Link to="/team"><h2>Team</h2></Link></Row>
                    <Row className='centerContent'>
                        <BlueButton buttonType="dark" action={ ()=>logout()} title="Log out" /> 
                    </Row>
                </Modal.Body>
            </Modal>            
        </Container>
    );
}

export default AuthUserHeader;