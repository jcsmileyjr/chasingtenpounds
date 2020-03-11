import React from 'react';
import "./BlueButton.css";

/*
    This navigational button has two types: 
    1. Dark blue background for using in the Header as a navigatinal link
    2. Light blue background for using in the Body as a Call to Action.
*/
const BlueButton = props => {
    if(props.buttonType === "dark"){
        if(props.flat){
            return <button type="button" className="dark flatButton" onClick={props.action}>{props.title}</button>
        }
        return <button type="button" className="dark floatingButton" onClick={props.action}>{props.title}</button>
    }else if(props.wide){
        if(props.wide){
            return <button type="button" className="light floatingButton wideButton" onClick={props.action}>{props.title}</button>
        }
    }else{
        if(props.flat){
            return <button type="button" className="light flatButton" onClick={props.action}>{props.title}</button>
        }        
        return <button type="button" className="light floatingButton" onClick={props.action}>{props.title}</button>
    }
}

export default BlueButton;