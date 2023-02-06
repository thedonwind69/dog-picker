import React, {useState} from 'react';

function ChosenBreed (props) {

    return (
        <div class='App'>
            <div class='App-header'>
                <h1>You picked a {props.chosenBreed.name}!</h1>
                <div class={`
                chosen-breed-pic 
                ${props.chosenBreed.name.split(" ").join("")} 
                border border-danger
                animate__animated
                animate__rubberBand
                `}>
                </div>
            </div>
        </div>
    )
}

export default ChosenBreed;