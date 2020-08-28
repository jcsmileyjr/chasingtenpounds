import React from 'react';
import { Link } from "react-router-dom";
import {Container, Row, Col, Form} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import './LogInPageBody.css';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';

const LogInPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        console.log("WIP: Testing that the button works!");
    }

    const {loginWithRedirect} = useAuth0();

    return(
        <Container fluid={true} className="logInPageLayout">            
            <Row className="logInBody">                
                <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
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
                <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} className="centerElements">
                    <Link to="/weighIn">
                        <BlueButton buttonType="light" action={loginWithRedirect} title="Log In" flat={false} wide={true}/>
                    </Link>
                </Col>
                <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} className="centerElements">
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