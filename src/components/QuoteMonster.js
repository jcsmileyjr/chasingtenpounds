import React from 'react'
import {Col, Image} from 'react-bootstrap';
import monsterQuote from '../assets/images/monsterQuote.png';
import "./QuoteMonster.css";

const QuoteMonster = () => {
    return(
        <Col xs={12} sm={{ span: 8, offset: 2 }}>
            <p className="quoteTitleStyle">Inspirational Quote</p>
            <p className="centerElement quote">I ate healthy and exercised today. I better wake up Skinny!!!</p>
            <article style={{textAlign: "right", marginTop: "-1rem"}}>
                <Image src={monsterQuote} fluid className="quoteMonster" />
            </article>                    
        </Col>
    );
}

export default QuoteMonster;