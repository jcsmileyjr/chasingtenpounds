import React from 'react';
import "./DarkButton.css";

/*
    This navigational button has a dark blue background and black text color styling.
*/
const DarkButton = props => {
    return(
        <button type="button" onClick={props.action}>{props.title}</button>
    );
}

export default DarkButton;