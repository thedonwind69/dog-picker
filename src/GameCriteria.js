import { useState } from "react";

function GameCriteria (props) {

    const {firstBreedChoice, secondBreedChoice} = props;
    const [pointsState, setPointsState] = useState({
        category1: null,
        category2: null,
        category3: null,
        category4: null
    })

    function submitWinner () {

    }


    function setPoints (categoryNumber, e) {
        setPointsState((prevState) => {
            return {...prevState, [categoryNumber]: e.target.value}
        })
    }

    console.log(pointsState)

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
            <button onClick={submitWinner} >Submit Winner</button>
        </div>
    )
}

export default GameCriteria;