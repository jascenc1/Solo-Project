import React, { Component } from 'react';
// import { BroswerRouter as Router, Route } from 'react-router-dom';
// import Stock from './Stock';
import StocksLandingPage from './StocksLandingPage';

import '../stylesheets/styles.css';
// const stock = 'AAPL';
// stock={stock} inside stock component works to pass it down then use this.props.stock to use with code
class App extends Component {
  render() {
    return (
      <div className="App">
       <StocksLandingPage /> 
      </div>
    );
  }
}

export default App;
