import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField'
import TradingTeaser from './components/InputField'
class App extends Component {
  render() {
    return (
      <div className="App">
          <TradindTeaser />
          <InputField/>
      </div>
    );
  }
}

export default App;
