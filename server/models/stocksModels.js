const mongoose = require('mongoose');
 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useFindAndModify: false
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(err);
  }
}

const Schema = mongoose.Schema; 


// set a schema for the 'stocks' collection

const stocksSchema = new Schema({
  symbol: String,
  name: String,
  lastSale: String,
  marketCap: String,
  ipoYear: String,
  sector: String,
  industry: String,
  summaryQuote: String
});

// creates a model for the stocks collection that will be part of the export

const Stocks = mongoose.model('stocks', stocksSchema, 'stocks');

// how I added retrieved data from excel sheet into collection
// Stocks.collection.insertMany(test, (err, doc) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('docs added');
//   }
// });

module.exports = {
  Stocks,
  connectDB
}