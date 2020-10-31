const express = require('express');  // creates router variable that has router capabilities 
const stocksDBController = require('../Controllers/stocksDBController'); // gives access to middleware funcs
const router = express.Router();


// need a router to get info from DB, ie tickers and price, etc

router.get('/:ticker', stocksDBController.getStock, (req, res) => {
  res.status(200).json(res.locals.stock);
});


// able to post to DB, need to add user input forms for this 

router.post('/addDB', stocksDBController.addStock, (req, res) => {
  // need to add middleware func in controller to get that info from request body and create the stock person wants
  // it would be something like 

  //  res.status(200).json({})
   res.status(200).send('SUCCESS');
  // .catch(err => res.status(400).json('error' + err))
});


// router . update? find stock price only?  can do many things but for now have that
// router to delete stuff? 

router.delete('/:id', (req, res) => {
 // @ time 38:41 on https://www.youtube.com/watch?v=7CqJlxBYj-M&t=2914s

  res.status(200).send('success');  
});


router.post('/update/:ticker', (req, res) => {

});

module.exports = router; 