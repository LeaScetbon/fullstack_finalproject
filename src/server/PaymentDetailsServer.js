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






  



  
  

  
module.exports = router;