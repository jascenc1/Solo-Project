const models = require('../models/stocksModels'); // gives access to stocksModels exported object with stocks db 
// ie models.Stocks

const stocksDBController = {}; 

// need controller to get info from DB when user wants to add a stock to their 'portfolio'

stocksDBController.getStock = (req, res, next) => {
  // get req.params.symbol so need to destructure that
  const { ticker } = req.params; 

  // access Stocks model from models object
   models.Stocks.find({ symbol: ticker }).exec()
    .then((stock) => {
      res.locals.stock = stock;
      return next();
    })
    // if not found
    .catch((err) => {
      return res.status(400).json('Stock not part of NASDAQ' + err); // <-- think about global error 
    });
};





// controller for strech feature where person can add a stock to db
stocksDBController.addStock = (req, res, next) => {
  // get info from request.body. maybe destructure it
  console.log(req.body);
  models.Stocks.create(req.body)
    .then((response) => {
      console.log(response);
      console.log('added successfully')
      return next(); 
    })
    .catch(err => console.log(err));
  


  // return next() and then in the db router just do
};


// controller to delte if time

stocksDBController.deleteStock = (req, res, next) => {
  models.Stocks.findByIdAndDelete(req.params.id)
    .then((response) => {
      console.log(response);
      return next();
    })
    .catch(err => console.log(err));
}

//controller to update if time 

module.exports = stocksDBController;