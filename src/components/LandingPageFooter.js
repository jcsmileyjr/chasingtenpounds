import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./LandingPageFooter.css"

const LandingPageFooter = () => {
    return(
        <Container fluid className="footer">
            <Row className="footerText">
                <Col><p>Developed with <span className="footerWord">Passion</span> by JC Smiley</p></Col>
            </Row>
        </Container>

    );
}

export default LandingPageFooter;