import React from 'react';
import { Link } from "react-router-dom";
import {Container, Row, Col, Form} from 'react-bootstrap';

import './LogInPageBody.css';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';

const LogInPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        console.log("WIP: Testing that the button works!");
    }
    return(
        <Container fluid={true} className="logInPageLayout">            
            <Row className="logInBody">                
                <Col xs={12} sm={{ span: 8, offset: 2 }}>
                    <Form>
                        <Form.Group controlId="UserEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Text>Ex. something@something.com</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="UserPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" required />
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Show Password" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} sm={{ span: 8, offset: 2 }} className="centerElements">
                    <Link to="/weighIn">
                        <BlueButton buttonType="light" action={test} title="Log In" flat={false} wide={true}/>
                    </Link>
                </Col>
                <Col xs={12} sm={{ span: 8, offset: 2 }} className="centerElements">
                    <Link to="/signUp">
                        <BlueButton buttonType="light" action={test} title="Create an Account" flat={true} wide={true}/>
                    </Link>
                </Col>
                <QuoteMonster />
            </Row>
            <Row><Footer /></Row>
        </Container>
    );
}

export default LogInPageBody;