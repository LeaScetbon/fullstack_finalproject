const express = require("express");
const connection = require("./connection.js")
// const bodyParser = require('body-parser');
// const crypto = require('crypto');
const router = express.Router();
const mysql = require("mysql2");


router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});





  // Add a product to the user's cart
router.post('/users/:userId/MyCart', (req, res) => {
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
  router.get('/users/:userId/MyCart', (req, res) => {
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
  
  router.delete('/users/:userId/MyCart/:productId', (req, res) => {
    const { userId, productId } = req.params;
    const query = 'DELETE FROM mycart WHERE id = ? AND product_id = ?';
    
    connection.query(query, [userId, productId], (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (results.affectedRows === 0) {
        
        res.status(404).json({ error: 'Product not found in the cart.' });
      } else {
        res.status(204).send(); 
      }
    });
  });



  
  

  
module.exports = router;