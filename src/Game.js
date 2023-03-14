import { allDogBreeds } from "./data";
import { useState } from "react";
import GameCriteria from "./GameCriteria";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var currentYear = new Date().getFullYear();

function Game () {

    const [gameStartedOrNot, setGameStarted] = useState(false);
    const [firstBreedChoice, setFirstBreedChoice] = useState(null);
    const [secondBreedChoice, setSecondBreedChoice] = useState(null);
    const [isLoadingStateFirstChoice, setIsLoadingStateFirstChoice] = useState(false);
    const [isLoadingStateSecondChoice, setIsLoadingStateSecondChoice] = useState(false);
    const [winnerChosenOrNot, setWinnerChosenOrNot] = useState(false);

    function getBreedArrayExludingTheFirst (firstBreedChoice) {
        var finalArray = [];
        for (let i = 0; i<allDogBreeds.length; i++) {
            let currentBreed = allDogBreeds[i];
            if (firstBreedChoice.name !== currentBreed.name) {
                finalArray.push(currentBreed);
            }
        }
        return finalArray;
    }

    function startGame () {
        const firstBreedChoice = allDogBreeds[getRandomInt(allDogBreeds.length)];
        var dogBreedArrayMinusFirstChoice = getBreedArrayExludingTheFirst(firstBreedChoice);
        const secondBreedChoice = dogBreedArrayMinusFirstChoice[getRandomInt(dogBreedArrayMinusFirstChoice.length)];
        setGameStarted(true);
        setFirstBreedChoice(firstBreedChoice);
        setSecondBreedChoice(secondBreedChoice);

        // load the first choice in 2 secs
        setIsLoadingStateFirstChoice(true)
            setTimeout(function() { 
        setIsLoadingStateFirstChoice(false)
        }.bind(this), 3000)

        // load the second one in 4 secs
        setIsLoadingStateSecondChoice(true)
            setTimeout(function() { 
        setIsLoadingStateSecondChoice(false)
        }.bind(this), 5000)

    }

    function displayFirstChoice () {
        if (isLoadingStateFirstChoice) {
            return (
                <div class="lds-dual-ring"></div>
            )
        } else if (!isLoadingStateFirstChoice && firstBreedChoice) {
            return (
                <div class={`
                    animate__animated
                    animate__fadeIn
                `}>
                    <h1>{firstBreedChoice.name}, {currentYear - firstBreedChoice.year}</h1>
                    <img class="chosen-breed-pic"src={require(`../pics/${firstBreedChoice.name.split(" ").join("")}.jpg`)}></img>
                </div>
            )
        }
    }

    function displaySecondChoice () {
        if (isLoadingStateSecondChoice) {
            return (
                <div class="lds-dual-ring"></div>
            )
        } else if (!isLoadingStateSecondChoice && secondBreedChoice) {
            return (
                <div class={`
                    animate__animated
                    animate__fadeIn
                `}>
                    <h1>{secondBreedChoice.name}, {currentYear - secondBreedChoice.year}</h1>
                    <img class="chosen-breed-pic"src={require(`../pics/${secondBreedChoice.name.split(" ").join("")}.jpg`)}></img>
                </div>
            )
        }
    }

    function displayGameCriteria () {
        if (gameStartedOrNot) {
            return <GameCriteria firstBreedChoice={firstBreedChoice} secondBreedChoice={secondBreedChoice}/>
        }
    }

    return (
        <div className="App">
            <div className="App-header">
                <h1>Game Here</h1>

                <div class='game-container'>
                    <div>{displayFirstChoice()}</div>

                    <div class='game-criteria-container'>
                        <h1></h1>
                        <div>{displayGameCriteria()}</div> 
                    </div>
                    
                    <div>{displaySecondChoice()}</div>
                </div>
               
                {!gameStartedOrNot ? <button onClick={startGame}>Start Game</button> : <div></div>}
                
            </div>

        </div>
    )

}

export default Game;