const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors=require('cors');

app.use(cors());
app.use(express.json());

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
}); 

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DaphnaAura19",
  database: "fullStackFinalDB" // Replace "your_database_name" with the actual name of your database

});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ', error);
  } else {
    console.log('Connected to the database');
  }
 
  app.get('/login', (req, res) => {
    const { username } = req.query;
    console.log(req)
    // Execute the query to retrieve user data based on the username
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (error, results) => {
      console.log(error);
      console.log("results:" + results);
      if (error) {
          console.error('Error executing the query: ', error);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          
          res.json(results);
      }
    });
  });
});



  