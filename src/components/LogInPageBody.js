import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './LogInPageBody.css';
import BlueButton from '../components/BlueButton';


const LogInPageBody = () => {
    return(
        <Container fliud >            <Row>
                
                <Col xs={12} sm={{ span: 6, offset: 3 }} className="testLayout">Hello</Col>
            </Row>
        </Container>
    );
}

export default LogInPageBody;