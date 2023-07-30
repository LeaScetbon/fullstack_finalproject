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
  
    // Check if the product is already in the cart for this user
    const checkQuery = 'SELECT * FROM mycart WHERE id = ? AND product_id = ?';
    connection.query(checkQuery, [userId, productId], (error, results) => {
      if (error) {
        console.error('Error checking if the product is in the cart: ', error);
        return res.status(500).json({ error: 'An error occurred while checking the cart' });
      }
  
      if (results.length > 0) {
        // Product is already in the cart, update the quantity
        const quantity = results[0].quantity + 1;
        const updateQuery = 'UPDATE mycart SET quantity = ? WHERE id = ? AND product_id = ?';
        connection.query(updateQuery, [quantity, userId, productId], (error, result) => {
          if (error) {
            console.error('Error updating the quantity in the cart: ', error);
            return res.status(500).json({ error: 'An error occurred while updating the quantity' });
          }
          res.status(200).json({ message: 'Product quantity updated in the cart' });
        });
      } else {
        // Product is not in the cart, add it as a new entry
        const insertQuery = 'INSERT INTO mycart (id, product_id, quantity) VALUES (?, ?, 1)';
        connection.query(insertQuery, [userId, productId], (error, result) => {
          if (error) {
            console.error('Error adding the product to the cart: ', error);
            return res.status(500).json({ error: 'An error occurred while adding the product to the cart' });
          }
          res.status(201).json({ message: 'Product added to the cart' });
        });
      }
    });
  });
  
  // Get the user's cart items
  router.get('/users/:userId/MyCart', (req, res) => {
    const { userId } = req.params;
  
    const query = `
      SELECT products.*, mycart.quantity
      FROM mycart
      JOIN products ON mycart.product_id = products.product_id
      WHERE mycart.id = ?
    `;
  
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