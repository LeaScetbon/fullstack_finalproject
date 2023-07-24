const mysql = require("mysql2");

// Create a connection to the MySQL server
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DaphnaAura19",
});

// Create the database
con.query(
  "CREATE DATABASE IF NOT EXISTS fullStackFinalDB",
  function (err, result) {
    if (err) throw err;
    console.log("Database created or already exists");

    // Use the newly created database
    con.query("USE fullStackFinalDB", function (err, result) {
      if (err) throw err;
      console.log("Database selected");

      // Rest of your code (create users table and insert data) here...
      con.query(createUsersTableQuery, (err, results) => {
        if (err) throw err;
        console.log("user table created successfully");

        // Insert users data into the table
        con.query(insertUserQuery, [userDataValues], (err, results) => {
          if (err) throw err;
          console.log("Users data inserted successfully");

          con.query(createProductsTableQuery, (err, results) => {
            if (err) throw err;
            console.log("product table created successfully");

            // Insert products data into the table
            con.query(insertProductQuery, [ProductsData], (err, results) => {
              if (err) throw err;
              console.log("Products data inserted successfully");

              // Close the connection after completing all queries
              con.end(function (err) {
                if (err) throw err;
                console.log("Connection closed");
              });
            });
          });
        });
      });
    });
  }
);

// create users table
const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  usertype VARCHAR(255) NOT NULL,
  userpassword INT NOT NULL 
);
`;

const usersData = [
  {
    id: 1,
    username: "Lea",
    email: "lea@gmail.com",
    usertype: "client",
    userpassword: 1234,
  },
  {
    id: 2,
    username: "Jane Smith",
    email: "jane.smith@gmail.com",
    usertype: "client",
    userpassword: 56,
  },
  {
    id: 3,
    username: "Michael Johnson",
    email: "michael.johnson@gmail.com",
    usertype: "client",
    userpassword: 7,
  },
  {
    id: 4,
    username: "Emily Brown",
    email: "emily.brown@gmail.com",
    usertype: "client",
    userpassword: 8,
  },
  {
    id: 5,
    username: "William Lee",
    email: "william.lee@gmail.com",
    usertype: "client",
    userpassword: 9,
  },
  {
    id: 6,
    username: "Sophia Martinez",
    email: "sophia.martinez@gmail.com",
    usertype: "client",
    userpassword: 111,
  },
  {
    id: 7,
    username: "Oliver Wilson",
    email: "oliver.wilson@gmail.com",
    usertype: "client",
    userpassword: 756,
  },
  {
    id: 8,
    username: "Ava Johnson",
    email: "ava.johnson@gmail.com",
    usertype: "client",
    userpassword: 25,
  },
  {
    id: 9,
    username: "Ethan Taylor",
    email: "ethan.taylor@gmail.com",
    usertype: "client",
    userpassword: 482,
  },
  {
    id: 10,
    username: "Isabella Anderson",
    email: "isabella.anderson@gmail.com",
    usertype: "client",
    userpassword: 9876,
  },
];

const insertUserQuery = "INSERT INTO users VALUES ?";

const userDataValues = usersData.map((user) => [
  user.id,
  user.username,
  user.email,
  user.usertype,
  user.userpassword,
]);

const createProductsTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT NOT NULL,
    colors JSON NOT NULL,
    in_stock BOOLEAN NOT NULL,
    weight INT NOT NULL,
    product_picture VARCHAR(255) NOT NULL
  );`;
const ProductsData = [
  {
    product_id: 1,
    product_name: "Heat-Resistant Oven Mitts",
    brand: "KitchenPro",
    price: 12.99,
    description:
      "Protect your hands while handling hot cookware with these heat-resistant oven mitts.",
    colors: ["Red", "Blue", "Black"],
    in_stock: true,
    weight: 200,
    product_picture: "oven_mitts.jpeg",
    reviews: [],
  },

  {
    product_id: 2,
    product_name: "Non-Stick Baking Pan",
    brand: "BakeMaster",
    price: 19.99,
    description:
      "Bake delicious treats without worrying about sticking with this non-stick baking pan.",
    colors: ["Silver"],
    in_stock: true,
    weight: 400,
    product_picture: "baking_pan.jpeg",
    reviews: [
      {
        user: "baker87",
        rating: 5,
        comment: "Best baking pan I've ever used. Nothing sticks to it!",
      },
    ],
  },
  {
    product_id: 3,
    product_name: "Professional Chef's Knife",
    brand: "ChefEssentials",
    price: 49.99,
    description:
      "Slice, dice, and chop like a pro with this high-quality chef's knife.",
    colors: ["Black", "Stainless Steel"],
    in_stock: true,
    weight: 250,
    product_picture: "chef_knife.jpeg",
    reviews: [],
  },
  {
    product_id: 4,
    product_name: "Silicone Baking Mat",
    brand: "BakeEase",
    price: 8.95,
    description:
      "Replace parchment paper with this reusable silicone baking mat for easy baking.",
    colors: ["Red"],
    in_stock: true,
    weight: 150,
    product_picture: "baking_mat.jpeg",
    reviews: [],
  },
  {
    product_id: 5,
    product_name: "Stainless Steel Mixing Bowls Set",
    brand: "MixItUp",
    price: 24.99,
    description:
      "A set of durable stainless steel mixing bowls in various sizes for all your baking needs.",
    colors: ["Silver"],
    in_stock: true,
    weight: 800,
    product_picture: "mixing_bowls.jpeg",
    reviews: [
      {
        user: "baker123",
        rating: 4,
        comment: "Great bowls, but I wish they had lids.",
      },
    ],
  },
  {
    product_id: 6,
    product_name: "Electric Hand Mixer",
    brand: "MixMaster",
    price: 34.95,
    description:
      "Beat eggs, whip cream, and mix batters effortlessly with this electric hand mixer.",
    colors: ["White", "Black", "Silver"],
    in_stock: true,
    weight: 700,
    product_picture: "hand_mixer.jpeg",
    reviews: [],
  },
  {
    product_id: 7,
    product_name: "Wooden Rolling Pin",
    brand: "RollEasy",
    price: 14.5,
    description:
      "Roll out dough smoothly and evenly with this classic wooden rolling pin.",
    colors: ["Brown"],
    in_stock: true,
    weight: 400,
    product_picture: "rolling_pin.jpeg",
    reviews: [
      {
        user: "pastrylover",
        rating: 5,
        comment:
          "I love the traditional feel of this rolling pin. Perfect for my pie crusts!",
      },
    ],
  },
  {
    product_id: 8,
    product_name: "Baking Soda",
    brand: "PureBake",
    price: 2.99,
    description:
      "A versatile baking ingredient for various recipes and cleaning purposes.",
    colors: ["White"],
    in_stock: true,
    weight: 250,
    product_picture: "baking_soda.jpeg",
    reviews: [],
  },
  {
    product_id: 9,
    product_name: "Measuring Cups and Spoons Set",
    brand: "MeasurePerfect",
    price: 15.99,
    description:
      "Accurately measure ingredients with this convenient set of measuring cups and spoons.",
    colors: ["Grey"],
    in_stock: true,
    weight: 300,
    product_picture: "measuring_cups.jpeg",
    reviews: [
      {
        user: "chefAnna",
        rating: 4.5,
        comment: "Nice set, but I wish the handles were more comfortable.",
      },
    ],
  },
  {
    product_id: 10,
    product_name: "Digital Kitchen Scale",
    brand: "WeighRight",
    price: 22.49,
    description:
      "Precisely measure ingredients with this digital kitchen scale for perfect recipes every time.",
    colors: ["White", "Silver"],
    in_stock: true,
    weight: 500,
    product_picture: "kitchen_scale.jpg",
    reviews: [],
  },
  {
    product_id: 11,
    product_name: "Cupcake Baking Kit",
    brand: "CupcakeDelights",
    price: 29.99,
    description:
      "Create delightful cupcakes with this all-in-one cupcake baking kit.",
    colors: ["Pink"],
    in_stock: true,
    weight: 900,
    product_picture: "cupcake_baking_kit.jpeg",
    reviews: [],
  },
  {
    product_id: 12,
    product_name: "Piping Bags and Tips Set",
    brand: "FrostMaster",
    price: 18.95,
    description:
      "Decorate cakes and cupcakes like a pro with this piping bags and tips set.",
    colors: ["Clear", "Blue"],
    in_stock: true,
    weight: 150,
    product_picture: "piping_bags.jpeg",
    reviews: [],
  },
  {
    product_id: 13,
    product_name: "Bread Loaf Pan",
    brand: "BakeFresh",
    price: 11.75,
    description:
      "Bake fresh homemade bread with this sturdy and reliable bread loaf pan.",
    colors: ["Silver"],
    in_stock: true,
    weight: 350,
    product_picture: "bread_loaf_pan.jpg",
    reviews: [],
  },
  {
    product_id: 14,
    product_name: "Cookie Cutters Set",
    brand: "CutItOut",
    price: 9.99,
    description:
      "Make fun and creative cookies with this set of cookie cutters.",
    colors: ["Yellow", "Green", "Blue"],
    in_stock: true,
    weight: 120,
    product_picture: "cookie_cutters.jpeg",
    reviews: [],
  },
  {
    product_id: 15,
    product_name: "Mixing Spatula",
    brand: "MixEasy",
    price: 6.49,
    description:
      "Mix and scrape batter easily with this versatile mixing spatula.",
    colors: ["Red", "Blue"],
    in_stock: true,
    weight: 90,
    product_picture: "mixing_spatula.jpeg",
    reviews: [],
  },
];

const createReviewsTableQuery = `
CREATE TABLE IF NOT EXISTS reviews (
  review_id INT PRIMARY KEY,
  product_id INT NOT NULL,
  user VARCHAR(255) NOT NULL,
  rating DECIMAL(2, 1) NOT NULL,
  comment TEXT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE
);`;

const createRecipeTableQuery = `
CREATE TABLE Recipe (
  receipt_id INT PRIMARY KEY,
  receipt_name VARCHAR(100),
  link VARCHAR(255),
  receipt_pdf BLOB -- Binary Large Object to store the PDF data
);`;

const insertIntoRecipeQuery = `
INSERT INTO Recipe (receipt_id, receipt_name, link, receipt_pdf)
VALUES
    (1, 'Chocolate Cake Recipe', 'https://www.example.com/video1', 'chocolate_cake_recipe.pdf'),
    (2, 'Chicken Alfredo Recipe', 'https://www.example.com/video2', 'chicken_alfredo_recipe.pdf'),
    (3, 'Vegetable Stir-Fry Recipe', 'https://www.example.com/video3', 'vegetable_stir_fry_recipe.pdf');
`;
