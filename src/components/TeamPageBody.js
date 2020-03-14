import React from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';

const TeamPageBody = () => {
    /*FOR TESTING ONLY */
    const test = () =>{
        console.log("WIP: Testing that the button works!");
    }
    return (
        <Container fluid={true} className="weighInPageLayout">
            <Row className="weighInBody">
                <Col xs={12} sm={{ span: 6, offset: 3 }} >
                    <h4 className="centerElements weighInWhiteSpaceAbove">Join Team</h4>
                    <Form.Group controlId="JoinTeamName">
                    <Form.Label>Type in the name of a Team to Join</Form.Label>
                        <Form.Control type="text" placeholder="Team Name" />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }}  className="centerElements weighInWhiteSpaceAbove">
                    <BlueButton buttonType="light" action={test} title="Join Team" flat={true} wide={true}/>
                </Col>               
            </Row>
            <Row><Col xs={12} sm={{ span: 6, offset: 3 }} className="line"></Col></Row>
            <Row className="weighInBody">
                <Col xs={12} sm={{ span: 6, offset: 3 }} >
                    <h4 className="centerElements weighInWhiteSpaceAbove">Create Team</h4>
                    <Form>
                        <Form.Group controlId="CreateTeamName">
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="CreateTeamName">
                            <Form.Label>Email Team Members</Form.Label>
                            <Form.Control as="textarea" rows="5" />
                            <Form.Text>Seperate with Commas</Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }}  className="centerElements weighInWhiteSpaceAbove">
                    <BlueButton buttonType="light" action={test} title="Create Team & Send Invites" flat={true} wide={true}/>
                </Col>
                <QuoteMonster />
            </Row>
            <Row>
                <Footer />
            </Row>
             
        </Container>
    );
}

export default TeamPageBody;