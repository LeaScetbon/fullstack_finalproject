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

//app.use('/', router);

router.get('/login', (req, res) => {
    const { username } = req.query;
    //console.log(req)
    // Execute the query to retrieve user data based on the username
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (error, results) => {
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
  
  router.get('/users', (req, res) => {
    const { username } = req.query;
    console.log(username);
    // Execute the query to retrieve user data based on the username
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (error, results) => {
        if (error) {
            console.error('Error executing the query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
  });
  
  
  // Add new user with register page
  router.post('/register', (req, res) => {
    const {username, email, userpassword} = req.body;
    // Perform validation checks on the username and password
    if (!username || !userpassword) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    const query = 'INSERT INTO users (username, userpassword, email, usertype) VALUES (?, ?, ?, ?)';
    connection.query(query, [username, userpassword, email, "client"], (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'User registered successfully' });
      }
    });
    
  });

  
module.exports = router;