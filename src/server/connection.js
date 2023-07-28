const mysql = require("mysql2");

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "fullStackFinalDB", // Replace "your_database_name" with the actual name of your database
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database: ", error);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = connection;

/**
Node server.js
npm start App.js 
*/
