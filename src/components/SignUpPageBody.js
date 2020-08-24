import React,{useState} from 'react';
import {useHistory } from "react-router-dom";
import {Container, Row, Col, Form} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import './SignUpPageBody.css';
import BlueButton from '../components/BlueButton';


const SignUpPageBody = () => {
    const [initialWeight, setInitialWeight] = useState(0);
    const history = useHistory();

    // Function to save user initial weight
    const setWeight = (e) => {
        setInitialWeight(e.target.value)
    }
    /*Save the weight to session storage to use later in signing user up */
    const saveWeight = () =>{
        if(initialWeight > 0){
            sessionStorage.setItem('userInitialWeight', initialWeight);
            history.push('/team');
            console.log(`Initial weight is ${initialWeight}`);
        }else{
            alert("Please type in a weight");
        }
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
                            <Form.Control type="number" placeholder="Enter weight" onChange={setWeight} required />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} sm={{ span: 6, offset: 3 }} className="centerElements whiteSpaceAbove">                    
                    <BlueButton buttonType="light" action={saveWeight} title="Create Account" flat={true} wide={true}/>                    
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpPageBody;