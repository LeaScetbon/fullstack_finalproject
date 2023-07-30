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


router.get('/Recipies', (req, res) => {
    const { receipt_name } = req.query;
    const query = 'SELECT * FROM Recipe ';
    connection.query(query, [receipt_name], (error, results) => {
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

  router.post('/Recipies', (req, res) => {
    const {
      receipt_name,
      link,
      receipt_pdf,
      picture_url

    } = req.body;
  
    if (
      !receipt_name ||
      !link ||
      !receipt_pdf ||
      !picture_url
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const recipeId = Math.floor(Math.random() * 100000);
  
    
    connection.query(
      'INSERT INTO recipe (receipt_id, receipt_name, link, receipt_pdf, picture_url) VALUES (?, ?, ?, ?, ?)',
      [recipeId, receipt_name, link, receipt_pdf, picture_url],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'An error occurred while adding the recipe' });
        }
  
        const newRecipie = {
          receipt_id: recipeId,
          receipt_name,
          link,
          receipt_pdf,
          picture_url
        };
        res.status(201).json(newRecipie);
      }
    );
  });
  

  
module.exports = router;