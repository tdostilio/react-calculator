import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonContainer from './button_container.js';
import ValueBox from './value_box.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ValueBox/>
        {/* <ButtonContainer/> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
