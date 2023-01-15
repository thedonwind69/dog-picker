import './App.css';
import React from 'react';

var currentYear = new Date().getFullYear();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      sex: "hello"
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dog Picker {currentYear}!</h1>
          <h1>{this.state.sex}</h1>
    
        </header>
      </div>
    );
  }
}


export default App;
