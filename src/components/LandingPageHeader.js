import React from 'react';
import './LandingPageHeader.css';

import BlueButton from './BlueButton';
import {Container, Row, Col} from 'react-bootstrap';


const LandingPageHeader = () => {
    const test = () =>{
        alert("hello world");
    }

    return (
        <Container fluid={true} className="background">
            <Row>
                <Col>Hello</Col>
                <Col>Chasing the <span className="redText">10 lb</span> Monster</Col>
                <Col>
                    <BlueButton buttonType="dark" action={test} title="Sign Up" />
                    <BlueButton buttonType="dark" action={test} title="Log In" />
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPageHeader;