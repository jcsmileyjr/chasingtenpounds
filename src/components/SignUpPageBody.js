import React from 'react';
import { Link } from "react-router-dom";
import {Container, Row, Col, Form} from 'react-bootstrap';

import './SignUpPageBody.css';
import BlueButton from '../components/BlueButton';


const SignUpPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        console.log("WIP: Testing that the button works!");
    }
    return(
        <Container fluid={true} >            
            <Row className="whiteSpaceAbove">                
                <Col xs={12} sm={{ span: 6, offset: 3 }}>
                    <Form className="blueBorder">
                        <Form.Group controlId="UserEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Text>Ex. something@something.com</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="UserPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" required />
                        </Form.Group>
                        <Form.Group controlId="UserVerifyPassword">
                            <Form.Label>Verify Password</Form.Label>
                            <Form.Control type="password" placeholder="Re-enter password" required />
                        </Form.Group>
                        <Form.Group controlId="UserInitialWeight">
                            <Form.Label>Initial Weight</Form.Label>
                            <Form.Control type="number" placeholder="Enter weight" required />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} className="centerElements whiteSpaceAbove">
                    <Link to="/team">
                        <BlueButton buttonType="light" action={test} title="Create Account" flat={true} wide={true}/>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpPageBody;