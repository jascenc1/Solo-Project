const express = require('express');
const dotenv = require('dotenv'); // has our config/variables
const path = require('path');
const axios = require('axios');
const cors = require('cors'); // to get cross origin working 
const mDB = require('./models/stocksModels');



/* const morgan = require('morgan'); // used so taht when there is any request, it'll show in the console
 */
// to load config file
dotenv.config( { path: './config/config.env' } ); // where we place our global variables. port also goes here. can also store mongo URI

mDB.connectDB();

const app = express(); // initialzie app with express 

app.use(cors());



app.use('/build', express.static(path.resolve(__dirname, '../build')));
// logging 
/* if (process.env.NODE_ENV === 'development') {
  // add morgan middleware
  app.use(morgan('dev')); // shows http method and res in console 
} */

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/stocks', (req, res, next) => {
  axios.get('https://old.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nasdaq&render=download')
    .then(response => {
      let stockList = response.data.split('\r\n').map(stock => {
        return stock.replace(/",/g, "").replace(/\"/g, "|").split("|").splice(1);
        
      });
      stockList.pop();
      stockList.shift();
      let stocks = stockList.map(stock => {
        return {
          symbol: stock[0],
          name: stock[1],
          lastSale: stock[2],
          marketCap: stock[3],
          ipoYear: stock[4],
          sector: stock[5],
          industry: stock[6],
          summaryQuote: stock[7]
        }
      })
      
      return res.send(stocks)
    })
});

// whenever we use process.env we can use variables in that config. if not there then we use port 5000
const PORT = process.env.PORT || 5000; 


app.listen(PORT, err => {
  if (err) return console.log(err);
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
}); 