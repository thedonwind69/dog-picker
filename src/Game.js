import { allDogBreeds } from "./data";
import { useState } from "react";
import GameCriteria from "./GameCriteria";
import DisplayWinner from "./DisplayWinner";
import {Link} from 'react-router-dom';

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
    const [winner, setWinner] = useState(null);

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
        if (gameStartedOrNot && !isLoadingStateSecondChoice && !isLoadingStateFirstChoice) {
            return <GameCriteria 
                firstBreedChoice={firstBreedChoice} 
                secondBreedChoice={secondBreedChoice}
                setWinner={setWinner}
                />
        }
    }

    if (winner) {
        return (<DisplayWinner winner={winner} setWinner={setWinner} firstBreedChoice={firstBreedChoice} secondBreedChoice={secondBreedChoice} startGame={startGame}/>)
    } else {
        return (
            <div className="App">
                <div className="App-header">

                    {!gameStartedOrNot ? <h1>Start game to pick 2 breeds at random and decide which is better fit for you:</h1> : <div></div>}
                
                    <div class='game-container'>
                        <div>{displayFirstChoice()}</div>

                        <div class='game-criteria-container'>
                            <h1></h1>
                            <div>{displayGameCriteria()}</div> 
                        </div>
                        
                        <div>{displaySecondChoice()}</div>
                    </div>
                
                    {!gameStartedOrNot ? <button onClick={startGame}>Start Game</button> : <div></div>}
                    
                    <Link to='/dog-picker'>back to home</Link>
                </div>
            </div>
        )
    }

}

export default Game;