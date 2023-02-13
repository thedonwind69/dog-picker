import './App.css';
import React, {useState} from 'react';
import { dogCategories} from './data';
import ChosenCategory from './chosenCategory';

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
        <div class="col-12 col-lg-4">
          <div class='card animate__animated animate__pulse' >
            <h1 class='text-center'>{category}</h1>
            <div class={`${categoryName} chosen-category-pic`}>
                
            </div>
          </div>
        </div>
      )
    })
    return displayCategories;
  }

  function selectDogCategory () {
    setIsLoadingState(prevState => {
      return {...prevState, isLoading: true}
    })

    var selectedDogCategory = dogCategories[getRandomInt(dogCategories.length)];
    setDogCategoryState((prevState) => {
      return {chosenCategory: selectedDogCategory}
    })

    setTimeout(function() { 
      setIsLoadingState(prevState => {
        return {...prevState, isLoading: false}
      })
    }.bind(this), 2000)

  }

  function rechooseCategory () {
    selectDogCategory();
  }

  if (isLoadingState.isLoading) {
    return (
      <div className='App'>
        <header class="App-header">
            <h1>Picking your furry category...!</h1>
            <div class="lds-dual-ring">

            </div>
        </header>
      </div>
    )
  } else if (!isLoadingState.isLoading && dogCategoryState.chosenCategory) {
      return (
        <ChosenCategory 
          chosenCategory={dogCategoryState.chosenCategory}
          rechooseCategory={rechooseCategory} 
          />
      )
  } else {
      return (
        <div className="App">
            <header className="App-header">
        
              <h1 class="dog-picker-title"><strong>DOG PICKER {currentYear}</strong></h1>

              
            {/* display the dog categories */}
              <div class="container">
                <div class="row">
                  {displayDogCategories()}
                </div>
              </div>
            {/* .... */}
            

              <button onClick={selectDogCategory} type="button" class="btn btn-primary btn-lg">Pick Random Dog Category</button>
              
            </header>
        </div>
      )
  }
  
}

export default App;
