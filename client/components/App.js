import React, { Component } from 'react';
import { BroswerRouter as Router, Route } from 'react-router-dom';
import Stock from './Stock';

// const stock = 'AAPL';
// stock={stock} inside stock component works to pass it down then use this.props.stock to use with code
class App extends Component {
  render() {
    return (
      <div className="App">
       <Stock /> 
      </div>
    );
  }
}

export default App;
