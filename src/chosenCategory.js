import React, {useState} from 'react';
import { dogCategories, LargeDogs, SmallDogs, MediumDogs} from './data';
import ChosenBreed from './chosenBreed.js';

function ChosenCategory (props) {

    const [chosenBreedState, setChosenBreedState] = useState({chosenBreed: null});
    const [isLoadingState, setIsLoadingState] = useState({isLoading: false});

    return (
        <div class='App'>
            <div class="App-header">
                <div class="container">
                    <div class='row'>
                        <div class='col-12 col-lg-6 border border-danger'>
                            <h1>Your category is {props.chosenCategory}!</h1>
                            <p>Now click again to choose your specific breed!</p>
                            <div class=''>
                                <div class={`${props.chosenCategory.split(" ").join("")}`}>

                                </div>
                            </div>
                        </div>
                        <div class='col-12 col-lg-6 border border-danger'>
                            <button type="button" class="btn btn-primary btn-lg">Choose your dog breed!</button>
                            <button onClick={props.rechooseCategory} type="button" class="btn btn-primary btn-lg">Re-choose category</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}


export default ChosenCategory;