const express = require("express");
const connection = require("./connection.js")
// const bodyParser = require('body-parser');
// const crypto = require('crypto');
const router = express.Router();


router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


router.get('/Products', (req, res) => {
    const { product_name } = req.query;
    const query = 'SELECT * FROM products ';
    connection.query(query, [product_name], (error, results) => {
      console.log(error);
      console.log(results);
      if (error) {
          console.error('Error executing the query: ', error);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          
          res.json(results);
      }
    });
  });
  
  

  
module.exports = router;