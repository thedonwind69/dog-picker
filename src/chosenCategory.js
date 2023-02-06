import React, {useState} from 'react';
import { dogCategories, LargeDogs, SmallDogs, MediumDogs} from './data';
import ChosenBreed from './chosenBreed.js';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function ChosenCategory (props) {

    const [chosenBreedState, setChosenBreedState] = useState({chosenBreed: null});
    const [isLoadingState, setIsLoadingState] = useState({isLoading: false});


    function selectDogBreed () {
        var dogCategory = null;
        if (props.chosenCategory == "Small Dogs") {
            dogCategory = SmallDogs;
        } else if (props.chosenCategory == "Medium Dogs") {
            dogCategory = MediumDogs;
        } else if (props.chosenCategory == "Large Dogs") {
            dogCategory = LargeDogs;
        }

        setIsLoadingState(prevState => {
            return {...prevState, isLoading: true}
          })

        var randomNum = getRandomInt(dogCategory.length);
        setChosenBreedState({chosenBreed: dogCategory[randomNum]});

        setTimeout(function() { 
            setIsLoadingState(prevState => {
              return {...prevState, isLoading: false}
            })
          }.bind(this), 2000)
    }

    if (isLoadingState.isLoading) {
        return (
            <div className='App'>
                <header class="App-header">
                    <h1>Picking your dog breed...</h1>
                    <div class="lds-dual-ring">

                    </div>
                </header>
            </div>
        )
    } else if (!isLoadingState.isLoading && chosenBreedState.chosenBreed) {
        return (
            <ChosenBreed chosenBreed={chosenBreedState.chosenBreed}/>
        )
    } else {
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
                                <button onClick={selectDogBreed} type="button" class="btn btn-primary btn-lg">Choose your dog breed!</button>
                                <button onClick={props.rechooseCategory} type="button" class="btn btn-primary btn-lg">Re-choose category</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )        
    }


}


export default ChosenCategory;