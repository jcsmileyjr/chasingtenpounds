import React, {useState, useContext} from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { store } from '../Context/store';

const WeighInPageBody = () => {
    const {user} = useAuth0(); // Using the auth0 Single Page SDK, updates itself when user is logged in
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [newWeight, setNewWeight] = useState(0);

    /*FOR TESTING ONLY */
    const test = () =>{
        console.log("WIP: Testing that the button works!");
        dispatch({type:'UPDATEWEIGHT',payload: newWeight}); // 
    }

    // Update the user weight in the component state, global state, and database
    const updateWeight = (e) => {
        setNewWeight(e.target.value);
        console.log(newWeight);
        
    }


    return (
        <Container fluid={true} className="weighInPageLayout">
            <Row className="weighInBody">
                <Col xs={12} >
                    <h2 className="weighInTitle">Type in Today's Weight</h2>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }} className="centerElements weighInWhiteSpaceAbove">
                    <Form.Group controlId="UserPassword">
                        <Form.Control type="number" placeholder="Type in your weight" onChange={updateWeight} required  />
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