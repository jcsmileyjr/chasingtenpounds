import React from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';
import { Link } from "react-router-dom";

const WeighInPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        console.log("WIP: Testing that the button works!");
    }
    return (
        <Container fluid={true} className="weighInPageLayout">
            <Row className="weighInBody">
                <Col xs={12} >
                    <h2 className="weighInTitle">Type in Today's Weight</h2>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }} className="centerElements weighInWhiteSpaceAbove">
                    <Form.Group controlId="UserPassword">
                        <Form.Control type="number" placeholder="Type in your weight" required  />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }} className="centerElements weighInWhiteSpaceAbove">
                    <Link to="/ranking">
                        <BlueButton buttonType="light" action={test} title="Submit New Weight" flat={true} wide={true}/>
                    </Link>
                </Col>
                <QuoteMonster />
            </Row>
            <Row>
                <Footer />
            </Row>
             
        </Container>
    );
}

export default WeighInPageBody;