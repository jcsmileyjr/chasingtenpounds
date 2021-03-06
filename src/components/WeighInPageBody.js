import React, {useState, useContext} from 'react';
import './WeighInPageBody.css'
import {Container, Row, Col, Form} from 'react-bootstrap';
import BlueButton from '../components/BlueButton';
import Footer from '../components/LandingPageFooter';
import QuoteMonster from './QuoteMonster';
import { useHistory } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { store } from '../Context/store';
import axios from 'axios';
import swal from 'sweetalert';

// Component allowing a player to update their current weight
const WeighInPageBody = () => {
    const {user} = useAuth0(); // Using the auth0 Single Page SDK, updates itself when user is logged in
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const history = useHistory();

    const [newWeight, setNewWeight] = useState();

    // when the submit button is clicked, the user weight is updated in the global state and database
    const saveNewWeight = () =>{
        if(/[0-9]/g.test(newWeight) && isNaN(newWeight) === false){
            const userData = {
                weight: newWeight,
                userEmail:user.email,
            }
    
            const url = 'https://chasingtenpounds.netlify.app/.netlify/functions/UpdateWeight';
            //const url = 'api/UpdateWeight'; // FOR TESTING
            const updatedPlayerDetails = JSON.stringify(userData);
            axios.post(url, updatedPlayerDetails)
            .then(function(response){
              const updatedState = response.data;
              dispatch({type:'UPDATEWEIGHT',payload: updatedState}); 
              history.push('/ranking');
            }) 
        }else{
            swal("Numbers only")
        } 
       
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
                        <Form.Control className="inputStyle" type="number" placeholder="Type in your weight" onChange={updateWeight} required  />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }} className="centerElements weighInWhiteSpaceAbove">                    
                    <BlueButton buttonType="light" action={saveNewWeight} title="Submit New Weight" flat={true} wide={true}/>                    
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