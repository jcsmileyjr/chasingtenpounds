import React from 'react';
import { Link } from "react-router-dom";
import {Container, Row, Col, Form} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import './SignUpPageBody.css';
import BlueButton from '../components/BlueButton';


const SignUpPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        console.log("WIP: Testing that the button works!");
    }

    const {user} = useAuth0();
    return(
        <Container fluid={true} >            
            <Row className="whiteSpaceAbove">                
                <Col xs={12} sm={{ span: 6, offset: 3 }}>
                    <Form className="blueBorder">
                        <h1 className="centerElements">Hello {user.name}</h1>
                        <Form.Group controlId="UserInitialWeight" className="whiteSpaceAbove">
                            <Form.Label className="indentLabel">Initial Weight</Form.Label>
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