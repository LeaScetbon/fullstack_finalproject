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
router.get("/products/:productId", (req, res) => {
    const productId = req.params.productId;
    const query = "SELECT * FROM products WHERE product_id = ?";
    connection.query(query, [productId], (error, results) => {
      if (error) {
        console.error("Error executing the query: ", error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Product not found" });
        } else {
          const product = results[0];
          res.json(product);
        }
      }
    });
  });
  
  module.exports = router;











  



  
  

  
module.exports = router;