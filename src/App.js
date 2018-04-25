import React, { Component } from 'react';
import InputField from './components/InputField'
import TradingTeaser from './components/TradingTeaser'
import Button from './components/Button'
import Label from './components/Label'
class App extends Component {
  render() {
      const tradingProps = {anonymous: true, prospect: true, full: true}
    return (
      <div className="App">
          <TradingTeaser {...tradingProps} />
          <Label>Your email address:</Label>
          <InputField/>
          <Button>Continue</Button>

      </div>
    );
  }
}

export default App;
