import { useState } from "react";

function GameCriteria (props) {

    const {firstBreedChoice, secondBreedChoice, setWinner} = props;
    const [pointsState, setPointsState] = useState({
        category1: null,
        category2: null,
        category3: null,
        category4: null
    })

    function submitWinner () {
        var values = Object.values(pointsState);
        if (values.some((value) => {
            return value == null;
        })) {
            alert("You need to select a choice for all!")
        } else {
            var countObject = {
                [firstBreedChoice.name]: 0,
                [secondBreedChoice.name]: 0,
                Tie: 0,
            };
            for (let i in values) {
                let currentBreed = values[i];
                countObject[currentBreed] += 1;
            }
            determineWinner(countObject);
        }
    }

    function determineWinner (countObject) {
        if (countObject.Tie === 4) {
            setWinner("Tie");
        } else if (countObject[firstBreedChoice.name] === countObject[secondBreedChoice.name]) {
            setWinner("Tie");
        } else if (countObject[firstBreedChoice.name] > countObject[secondBreedChoice.name]) {
            setWinner(firstBreedChoice);
        } else if (countObject[secondBreedChoice.name] > countObject[firstBreedChoice.name]) {
            setWinner(secondBreedChoice);
        }
    }

    function setPoints (categoryNumber, e) {
        setPointsState((prevState) => {
            return {...prevState, [categoryNumber]: e.target.value}
        })
    }

    return (
        <div>
            <h1>Cuteness</h1>
                <select onChange={(e) => setPoints('category1', e)}>
                    <option disabled selected value></option>
                    <option>{firstBreedChoice.name}</option>
                    <option>{secondBreedChoice.name}</option>
                    <option>Tie</option>
                </select>
            <h1>Compatibility</h1>
                <select onChange={(e) => setPoints('category2', e)}>
                    <option disabled selected value></option>
                    <option>{firstBreedChoice.name}</option>
                    <option>{secondBreedChoice.name}</option>
                    <option>Tie</option>
                </select>
            <h1>Maintenance</h1>
                <select onChange={(e) => setPoints('category3', e)}>
                    <option disabled selected value></option>
                    <option>{firstBreedChoice.name}</option>
                    <option>{secondBreedChoice.name}</option>
                    <option>Tie</option>
                </select>
            <h1>Lifespan</h1>
                <select onChange={(e) => setPoints('category4', e)}>
                    <option disabled selected value></option>
                    <option>{firstBreedChoice.name}</option>
                    <option>{secondBreedChoice.name}</option>
                    <option>Tie</option>
                </select>
            <h1></h1>
            <button class='btn btn-primary btn-lg'onClick={submitWinner} >Submit Winner</button>
        </div>
    )
}

export default GameCriteria;