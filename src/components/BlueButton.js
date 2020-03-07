import React from 'react';
import "./BlueButton.css";

/*
    This navigational button has two types: 
    1. Dark blue background for using in the Header as a navigatinal link
    2. Light blue background for using in the Body as a Call to Action.
*/
const BlueButton = props => {
    if(props.buttonType === "dark"){
        return <button type="button" className="dark" onClick={props.action}>{props.title}</button>
    }else{
        return <button type="button" className="light" onClick={props.action}>{props.title}</button>
    }
}

export default BlueButton;