const mysql = require('mysql2');

// Create a connection to the MySQL server
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DaphnaAura19",
});

// Connect to the MySQL server
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // Create the database
  con.query("CREATE DATABASE IF NOT EXISTS fullStackFinalDB", function (err, result) {
    if (err) throw err;
    console.log("Database created or already exists");

    // Use the newly created database
    con.query("USE fullStackFinalDB", function (err, result) {
      if (err) throw err;
      console.log("Database selected");

      // Rest of your code (create users table and insert data) here...

      // Close the connection after completing all queries
      con.end(function (err) {
        if (err) throw err;
        console.log("Connection closed");
      });
    });
  });
});

// create users table
const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  usertype VARCHAR(255) NOT NULL
  userpassword INT NOT NULL 
);
`;

const usersData=[
    {
        "id": 1,
        "name": "Lea",
        "email": "lea@gmail.com",
        "usertype": "client",
        "userpassword": 1234

    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@gmail.com",
        usertype: "client",
        userpassword: 56
      },
      {
        id: 3,
        name: "Michael Johnson",
        email: "michael.johnson@gmail.com",
        usertype: "client",
        userpassword: 7
      },
      {
        id: 4,
        name: "Emily Brown",
        email: "emily.brown@gmail.com",
        usertype: "client",
        userpassword: 8
      },
      {
        id: 5,
        name: "William Lee",
        email: "william.lee@gmail.com",
        usertype: "client",
        userpassword: 9
      },
      {
        id: 6,
        name: "Sophia Martinez",
        email: "sophia.martinez@gmail.com",
        usertype: "client",
        userpassword: 111
      },
      {
        id: 7,
        name: "Oliver Wilson",
        email: "oliver.wilson@gmail.com",
        usertype: "client",
        userpassword: 756
      },
      {
        id: 8,
        name: "Ava Johnson",
        email: "ava.johnson@gmail.com",
        usertype: "client",
        userpassword: 25
      },
      {
        id: 9,
        name: "Ethan Taylor",
        email: "ethan.taylor@gmail.com",
        usertype: "client",
        userpassword: 482
      },
      {
        id: 10,
        name: "Isabella Anderson",
        email: "isabella.anderson@gmail.com",
        usertype: "client",
        userpassword: 9876
      },
];

const insertUserQuery = 'INSERT INTO users VALUES ?';

const userDataValues = usersData.map((user) => [
    user.id,
    user.username,
    user.email,
    user.usertype,
    user.userpassword
  ]);
 