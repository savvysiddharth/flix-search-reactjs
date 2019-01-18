import React, { Component } from 'react';
import logo from '../../logo.svg';
import Intro from '../Intro';
import Series from '../../containers/Series';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TV Series app</h1>
        </header>
        <Intro message="Here you can find all tv series!" />
        <Series />
      </div>
    );
  }
}

export default App;
