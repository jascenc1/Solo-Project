const express = require('express');  // creates router variable that has router capabilities 
const stocksDBController = require('../Controllers/stocksDBController'); // gives access to middleware funcs
const router = express.Router();


// need a router to get info from DB, ie tickers and price, etc

router.get('/:ticker', stocksDBController.getStock, (req, res) => {
  res.status(200).json(res.locals.stock);
});


// **** might be a strech feature, but creating your own stock to add to db? 

router.post('/addDB', stocksDBController.addStock, (req, res) => {
  // need to add middleware func in controller to get that info from request body and create the stock person wants
  // it would be something like 

  //  res.status(200).json({})
   res.status(200).send('SUCCESS')  // <--- change to more PG message 
  // .catch(err => res.status(400).json('error' + err))
});

module.exports = router; 