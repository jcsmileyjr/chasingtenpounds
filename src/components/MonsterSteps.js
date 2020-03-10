import React from 'react';
import {Col, Image} from 'react-bootstrap';

const MonsterSteps = (props) => {
    return(
        <Col xs={12} sm={true} className="minorWhiteSpace">
        <Col className="centerElements imageTitle section4ImageTitle"><p className="stepStyle">{props.textA}</p></Col>
        <Col className="centerElements">
            <Image src={props.monster1} fluid className="monsterImage"/>
            {props.monster2 &&
                <Image src={props.monster2} fluid className="monsterImage"/>
            }
            {props.monster3 &&
                <Image src={props.monster3} fluid className="monsterImage"/>
            }
            <p>{props.textB}</p>                    
        </Col>
    </Col>        
    );
}

export default MonsterSteps;