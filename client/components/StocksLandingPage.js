import React, { Component } from 'react'
import axios from 'axios';

import StockDetails from './StockDetails';
import StockGraphModal from './StockGraphModal';

export default class StocksLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      ticker: '', 
      modalState: {
        open: false,
        stockTicker: null,
        position: {top: 0, left: 0},
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.onChangeTicker = this.onChangeTicker.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  openModal(stockTicker, position) {
    this.setState({
      modalState: {
        ...this.state.modalState, 
        open: true,
        stockTicker,
        position
      }
    })
  };

  closeModal() {
    this.setState({
      modalState: {
        ...this.state.modalState, 
        open: false
      }
    });
  };

  onChangeTicker(e) {
    this.setState({
      ticker: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const ticker = this.state.ticker;
    // console.log(typeof ticker);
    axios.get(`http://localhost:3000/stocks/${ticker}`)
      .then((res) => {
        console.log('hello');
        console.log(res);
        if (res.data.length !== 0) {
        this.setState({
          stocks: [...this.state.stocks, res.data[0]]
        });  
      } else {
        alert('Wrong market buddy')
      }
      })
      .catch(err => {
        alert('That stock dont exist')
      }) 

    this.setState({
      ticker: '',
    });

  };



  render() {
    return (
      <div>
        <h3>Please Input Stocks</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Input Stock Ticker: </label>
            <input type="text" 
              required 
              className="form-control" 
              value={this.state.ticker}
              onChange={this.onChangeTicker}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Look up Stock" />
          </div>
          <React.Fragment>
            <section className="mainSection">
              <div className="stockContainer">
          {
            this.state.stocks.map((stock) => {
              return (
                <StockDetails
                  key={stock._id}
                  info={stock}
                  openModal={this.openModal}
                />
              );
            })

          }
          </div>
          </section>
          </React.Fragment>
          <React.Fragment>
          <section className="mainSection">
            {
              this.state.modalState.open &&
              <StockGraphModal
                stockTicker={this.state.modalState.stockTicker}
                position={this.state.modalState.position}
                closeModal={this.closeModal}
              />
            }
            </section>
          </React.Fragment>
        </form>
      </div>
    );

  }
}
