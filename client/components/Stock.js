import React, { Component } from 'react'

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
    let API_KEY = 'FCD8F39RBU0F0BIH'; // not able to use process.env here with the api key. need to find this out 
    let stockSymbol = 'AMZN'; // need to update later to show the stocks that I choose
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`; // using this link: for doc https://www.alphavantage.co/documentation/#dailyadj. // symbol is adjustable 
    let stockChartXValuesFunction = [];
    let stockChartYValuesFuntion = [];

    fetch(API_Call) // can probably use axios for this 
      .then(res => res.json())
      .then((data) => {
        console.log(data);

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
        <h1>Stock Market</h1>
      </div>
    )
  }
}
