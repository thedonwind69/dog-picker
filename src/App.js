import './App.css';
import React from 'react';
import { dogCategories} from './data';

var currentYear = new Date().getFullYear();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var dogCategories = [
  "Small Dogs",
  "Medium Dogs",
  "Large Dogs"
]

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      dogCategories: dogCategories
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dog Picker {currentYear}!</h1>
          <h1>{}</h1>
    
        </header>
      </div>
    );
  }
}


export default App;
