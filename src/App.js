import './App.css';
import React, {useState} from 'react';
import { dogCategories} from './data';

var currentYear = new Date().getFullYear();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App () {

  const [dogCategoriesState, setDogCategoriesState] = useState({categories: ""});
  const [isLoadingState, setIsLoading] = useState({isLoading: false});



  function displayDogCategories () {
    const displayCategories = dogCategories.map((category) => {
      var categoryName = category.split(" ").join("");
      return (
        <div class="col-4">
          <div class='card dog-category' >
            <h1>{category}</h1>
            <img src="../pics/LargeDogs.jpg" class="img-fluid"></img>
          </div>
        </div>
      )
    })
    return displayCategories;
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
          
          </header>
      </div>
    )
  }
  
}

export default App;
