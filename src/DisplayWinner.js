var currentYear = new Date().getFullYear();

function DisplayWinner (props) {

    const {winner, setWinner, startGame, firstBreedChoice, secondBreedChoice} = props;

    function displayWinnerResult () {
        if (winner === "Tie") {
            return (
               <div display="block">
                <h1>Tie!</h1>
                    <div class='tie-winners-container'>
                        {/* first choice */}
                        <div class={`
                            animate__animated
                            animate__fadeIn
                        `}>
                            <h1>{firstBreedChoice.name}, {currentYear - firstBreedChoice.year}</h1>
                            <img class="chosen-breed-pic"src={require(`../pics/${firstBreedChoice.name.split(" ").join("")}.jpg`)}></img>
                        </div>
                        {/* second choice */}
                        <div class={`
                        animate__animated
                        animate__fadeIn
                        `}>
                            <h1>{secondBreedChoice.name}, {currentYear - secondBreedChoice.year}</h1>
                            <img class="chosen-breed-pic"src={require(`../pics/${secondBreedChoice.name.split(" ").join("")}.jpg`)}></img>
                        </div>
                    </div>
                </div> 
            )
        } else {
            return (
                <div class={` animate__animated animate__fadeIn`}>
                    <h1>WINNER!</h1>
                    <h1>{winner.name}, {currentYear - winner.year}</h1>
                    <img class="chosen-breed-pic"src={require(`../pics/${winner.name.split(" ").join("")}.jpg`)}></img>
                </div>
            )
        }
    }

    function playAgain () {
        setWinner(null);
        startGame();
    }

    return (
        <div className="App">
            <div className="App-header">
                {displayWinnerResult()}
                <button class='btn btn-primary btn-lg'onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}


export default DisplayWinner;