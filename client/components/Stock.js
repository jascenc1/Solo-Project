import React, { Component } from 'react'
import Plot from 'react-plotly.js';

export default class Stock extends Component {
  // store states
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [], // to plot data points on plotly 
      stockChartYValues: [], // to plot y data points on plotly
    }
  }

  componentDidMount() {
    // fetch info from stock api
    this.fetchStock();
  }

  fetchStock() {
    let API_KEY = process.env.API_KEY; // not able to use process.env here with the api key. need to find this out 
    let stockSymbol = 'TSLA'; // need to update later to show the stocks that I choose
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`; // using this link: for doc https://www.alphavantage.co/documentation/#dailyadj. // symbol is adjustable 
    let stockChartXValuesFunction = [];
    let stockChartYValuesFuntion = [];

    fetch(API_Call) // can probably use axios for this 
      .then(res => res.json())
      .then((data) => {
        // console.log(data);

        for (let key in data['Time Series (Daily)']) { //for every date fun this func
          stockChartXValuesFunction.push(key);
          stockChartYValuesFuntion.push(data['Time Series (Daily)'][key]['1. open']); 
        }
        // console.log(stockChartXValuesFunction); // this shows arr with dates (100 days to be exact)
        // console.log(stockChartYValuesFuntion); // shows price of stock dating back 100 days (3224.9400) <-- need to remove double 0s
        this.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFuntion
        });
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <Plot
        data={[
          {
            x: this.state.stockChartXValues,
            y: this.state.stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 620, height: 440, title: `TSLA Price over past 100 days`} }
      />
      </div>
    )
  }
}
