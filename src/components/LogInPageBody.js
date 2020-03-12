import React from 'react';
import {Container, Row, Col, Form, Image} from 'react-bootstrap';

import './LogInPageBody.css';
import BlueButton from '../components/BlueButton';
import monsterQuote from '../assets/images/monsterQuote.png';


const LogInPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        alert("WIP: Testing that the button works!");
    }
    return(
        <Container fluid={true} >            
            <Row className="centerForm">                
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
                <Col xs={12}>
                    <p className="quoteTitleStyle">Inspirational Quote</p>
                    <p className="centerElement quote">I ate healthy and exercised today. I better wake up Skinny!!!</p>
                    <article style={{textAlign: "right", marginTop: "-1rem"}}>
                        <Image src={monsterQuote} fluid className="quoteMonster" />
                    </article>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default LogInPageBody;