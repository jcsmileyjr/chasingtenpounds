import React from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';

const WeighInPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        console.log("WIP: Testing that the button works!");
    }
    return (
        <Container className="weighInCenterForm">
            <Row >
                <Col xs={12} sm={{ span: 8, offset: 2 }}>
                <h2 className="weighInTitle">Type in Today's Weight</h2>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} className="centerElements weighInWhiteSpaceAbove">
                    <Form.Group controlId="UserPassword">
                        <Form.Control type="number" placeholder="Type in your weight" required />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} className="centerElements weighInWhiteSpaceAbove">
                <BlueButton buttonType="light" action={test} title="Submit New Weight" flat={true} wide={true}/>
                </Col>
            </Row>  
        </Container>
    );
}

export default WeighInPageBody;