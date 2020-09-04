import React from 'react'
import {Col, Image} from 'react-bootstrap';
import monsterQuote from '../assets/images/monsterQuote.png';
import "./QuoteMonster.css";

var inspiration = [
    "You are What you Eat, so don't be FAST, CHEAP, EASY, or FAKE", 
    "My favorite exercise is a cross between a Lunge and a Crunch. I call it LUNCH", 
    "Dream Big, Work Hard, Stay Focused, and surround yourself with Good People", 
    "Do NOT REWARD YOURSELF WITH FOOD, YOU'RE NOT A DOG",
    "The trouble with trouble is it starts out as fun", 
    "Some people feel they keep trying to lose weight, but it keeps finding them.", 
    "Life expectancy would grow by leaps and bounds if green vegetables smelled as good as bacon",
    "Next time someone asks you how much you weigh.. Tell them One Hundred and Sexy", 
    "I ate healthy and exercised today. I better wake up Skinny.", 
    "RUN, like Channing Tatum is waiting for you at the the finish line", 
    "Hello! I'm the Fitness Fairy. I just sprinkled motivation dust on you. Now go and move your ass. This shit is expensive", 
    "Exercise, EX..ER..CISE, EX..AR..SIZE, EGGS..ARE..SIDES, ...FOR BACON... BACON"
];

const QuoteMonster = () => {
    const randomQuote = () => {
        return inspiration[Math.floor((Math.random() * inspiration.length-1 ) + 1)];
    }
    return(
        <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} className="whiteSpaceBelow">
            <p className="quoteTitleStyle">Inspirational Quote</p>
            <p className="centerElement quote">{randomQuote()}</p>
            <article style={{textAlign: "right", marginTop: "-1rem"}}>
                <Image src={monsterQuote} fluid className="quoteMonster" />
            </article>                    
        </Col>
    );
}

export default QuoteMonster;