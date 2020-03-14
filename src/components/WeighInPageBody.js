import React from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form, Image} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import monsterQuote from '../assets/images/monsterQuote.png';

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
                    <BlueButton buttonType="light" action={test} title="Submit New Weight" flat={true} wide={true}/>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>
                    <p className="quoteTitleStyle">Inspirational Quote</p>
                    <p className="centerElement quote">I ate healthy and exercised today. I better wake up Skinny!!!</p>
                    <article style={{textAlign: "right", marginTop: "-1rem"}}>
                        <Image src={monsterQuote} fluid className="quoteMonster" />
                    </article>                    
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
             
        </Container>
    );
}

export default WeighInPageBody;