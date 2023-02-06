import React, {useState} from 'react';
import { dogCategories} from './data';
import ChosenDog from './chosenDog.js';

function ChosenCategory (props) {




    return (
        <div class='App'>
            <div class="App-header">
                <div class="container">
                    <div class='row'>
                        <div class='col-12 col-lg-6 border border-danger'>
                            <h1>Your category is {props.chosenCategory}!</h1>
                            <div class=''>
                                <div class={`${props.chosenCategory.split(" ").join("")}`}>

                                </div>
                            </div>
                        </div>
                        <div class='col-12 col-lg-6 border border-danger'>
                            <button type="button" class="btn btn-primary btn-lg">Choose your dog breed!</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}


export default ChosenCategory;