const express = require("express");
const connection = require("./connection.js")

const mysql = require("mysql2");

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();

  

});

router.post('/users/:userId/MyCart/PaymentDetails', async (req, res) => {
  const { username, cardNumber, expirationDate, cvv } = req.body;

  if (!username || !cardNumber || !expirationDate || !cvv) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  const query = 'SELECT * FROM users WHERE username = ?';

  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error executing the query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const user = results[0];

      // Check if the user's card details match the form data
      if (
        user.card_number === cardNumber &&
        user.expiration_date === expirationDate &&
        user.cvv === cvv
      ) {
        return res.status(200).json({ message: 'Payment successful!' });
      } else {
        return res.status(400).json({ error: 'Invalid payment details' });
      }
    }
  });
});










  



  
  

  
module.exports = router;