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





  // Add a product to the user's cart
router.post('/users/:userId/cart', (req, res) => {
    const { userId } = req.params;
    const { productId } = req.body;
    const query = 'INSERT INTO mycart (id, product_id) VALUES (?, ?)';
    connection.query(query, [userId, productId], (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Product added to cart successfully' });
      }
    });
  });
  
  // Get the user's cart items
  router.get('/users/:userId/mycart', (req, res) => {
    const { userId } = req.params;
  
    const query = 'SELECT products.* FROM mycart JOIN products ON mycart.product_id = products.product_id WHERE id = ?';
    connection.query(query, [userId], (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  



  
  

  
module.exports = router;