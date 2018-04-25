import React, { Component } from 'react';
import './App.css';
import InputField from './components/InputField'
import TradingTeaser from './components/TradingTeaser'
class App extends Component {
  render() {
      const tradingProps = {anonymous: true, prospect: true, full: true}
    return (
      <div className="App">
          <TradingTeaser {...tradingProps} />
          <InputField/>
      </div>
    );
  }
}

export default App;
