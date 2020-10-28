const express = require('express');
const dotenv = require('dotenv'); // has our config/variables
const path = require('path');
/* const morgan = require('morgan'); // used so taht when there is any request, it'll show in the console
 */
// to load config file
dotenv.config( { path: './config/config.env' } ); // where we place our global variables. port also goes here. can also store mongo URI


const app = express(); // initialzie app with express 

app.use('/build', express.static(path.resolve(__dirname, '../build')));
// logging 
/* if (process.env.NODE_ENV === 'development') {
  // add morgan middleware
  app.use(morgan('dev')); // shows http method and res in console 
} */

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

// whenever we use process.env we can use variables in that config. if not there then we use port 5000
const PORT = process.env.PORT || 5000; 


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)); 