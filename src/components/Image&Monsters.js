import React from 'react';
import {Col, Image} from 'react-bootstrap';

const ImagesMonsters = (props) => {
    return(
        <Col xs={12} sm={true}>
        <Col className="centerElements imageTitle"><p className="stepStyle">{props.textA}</p></Col>
        <Col className="centerElements">
            <Image src={props.pic} fluid/>
        </Col>
        <Col className="centerElements minorWhiteSpace">
            <Image src={props.monster} fluid className="monsterImage spinningMonster"/>
            <p>{props.textB}</p>
        </Col>
    </Col>
    );
}

export default ImagesMonsters;