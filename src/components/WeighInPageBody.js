import React, {useState, useContext} from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { store } from '../Context/store';
import axios from 'axios';

const WeighInPageBody = () => {
    const {user} = useAuth0(); // Using the auth0 Single Page SDK, updates itself when user is logged in
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [newWeight, setNewWeight] = useState(0);

    // when the submit button is clicked, the user weight is updated in the global state and database
    const saveNewWeight = () =>{
        const userData = {
            weight: newWeight,
            userEmail:user.email,
        }

        const url = 'api/UpdateWeight';
        const updatedPlayerDetails = JSON.stringify(userData);
        axios.post(url, updatedPlayerDetails)
        .then(function(response){
          const updatedState = response.data;
          dispatch({type:'UPDATEWEIGHT',payload: updatedState}); // 
        })        
    }

    // Update the user weight in the component state
    const updateWeight = (e) => {
        setNewWeight(e.target.value);
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
                        <BlueButton buttonType="light" action={saveNewWeight} title="Submit New Weight" flat={true} wide={true}/>
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