import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';

import './LogInPageBody.css';
import BlueButton from '../components/BlueButton';


const LogInPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        alert("WIP: Testing that the button works!");
    }
    return(
        <Container fluid={true} >            
            <Row className="centerContent">                
                <Col xs={12} sm={{ span: 8, offset: 2 }}>
                    <Form>
                        <Form.Group controlId="UserEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
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
                    <BlueButton buttonType="light" action={test} title="Log In" flat={false} wide={true}/>
                </Col>
                <Col xs={12} sm={{ span: 8, offset: 2 }} className="centerElements">
                    <BlueButton buttonType="light" action={test} title="Create an Account" flat={true} wide={true}/>
                </Col>
            </Row>
        </Container>
    );
}

export default LogInPageBody;