import './App.css';
import React, {useState} from 'react';
import { dogCategories} from './data';

var currentYear = new Date().getFullYear();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App () {

  const [dogCategoryState, setDogCategoryState] = useState({chosenCategory: null});
  const [isLoadingState, setIsLoadingState] = useState({isLoading: false});

  function displayDogCategories () {
    const displayCategories = dogCategories.map((category) => {
      var categoryName = category.split(" ").join("");
      return (
        <div class="col-4">
          <div class='card dog-category' >
            <h1>{category}</h1>
            <img src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ" class="img-fluid"></img>
          </div>
        </div>
      )
    })
    return displayCategories;
  }

  function selectDogCategory () {
    setIsLoadingState(prevState => {
      return {isLoading: true}
    })
    var selectedDogCategory = dogCategories[getRandomInt(dogCategories.length)];
    setDogCategoryState((prevState) => {
      return {chosenCategory: selectDogCategory}
    })
  }

  if (isLoadingState.isLoading) {
    return (
      <div className='App'>
        <header class="App-header">
            <h1>loading....</h1>
        </header>
      </div>
    )
  } else {
    return (
      <div className="App">
          <header className="App-header">
      
            <h1 class="dog-picker-title"><strong>DOG PICKER {currentYear}!</strong></h1>
            
          {/* display the dog categories */}
            <div class="container">
              <div class="row">
                {displayDogCategories()}
              </div>
            </div>
          {/* .... */}
          

            <button onClick={selectDogCategory} type="button" class="btn btn-primary btn-lg">Pick Random Category</button>

          </header>
      </div>
    )
  }
  
}

export default App;
