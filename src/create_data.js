const mysql = require("mysql2");

// Create a connection to the MySQL server
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
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

      // //Rest of your code (create users table and insert data) here...
      // con.query(createUsersTableQuery, (err, results) => {
      // if (err) throw err;
      // console.log("user table created successfully");

      //   // Insert users data into the table:
      //   con.query(insertUserQuery, [userDataValues], (err, results) => {
      //     if (err) throw err;
      //     console.log("Users data inserted successfully");

      // // create product table data into the table:
      //con.query(createProductsTableQuery, (err, results) => {
      //if (err) throw err;
      //console.log("product table created successfully");

      //   // Insert products data into the table
      //con.query(insertProductQuery, [productDataValues], (err, results) => {
      //if (err) throw err;
      //console.log("Products data inserted successfully");

      // create recipe data into the table
      con.query(createRecipeTableQuery, (err, results) => {
        if (err) throw err;
        console.log("recipe table created successfully");

        // inserted recipe data into the table

        con.query(insertRecipeQuery, [recipeDataValues], (err, results) => {
          if (err) throw err;
          console.log("Recipes data inserted successfully");

          // Insert mycart data into the table
          //con.query(createCartTableQuery, (err, results) => {
          //if (err) throw err;
          //console.log("mycart table created successfully");

          // Close the connection after completing all queries
          con.end(function (err) {
            if (err) throw err;
            console.log("Connection closed");
          });
        });
      });
    });
    //});
    // });
    //});
  }
);
//     });
//   }
// );
//     });
//   }
// );

// create users table
const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  usertype VARCHAR(255) NOT NULL,
  userpassword INT NOT NULL, 
  card_number BIGINT(16) NOT NULL,
  expiration_date VARCHAR(255) NOT NULL,
  cvv INT(3) NOT NULL
  userpassword INT NOT NULL, 
  card_number BIGINT(16) NOT NULL,
  expiration_date VARCHAR(255) NOT NULL,
  cvv INT(3) NOT NULL

);
`;

const usersData = [
  {
    id: 1,
    username: "Lea",
    email: "lea@gmail.com",
    usertype: "client",
    userpassword: 1234,
    card_number: 1111111111111111,
    expiration_date: "2025-01-01",
    cvv: 123,
  },
  {
    id: 2,
    username: "Jane Smith",
    email: "jane.smith@gmail.com",
    usertype: "client",
    userpassword: 56,
    card_number: 1111111111111112,
    expiration_date: "2025-01-02",
    cvv: 123,
    card_number: 1111111111111112,
    expiration_date: "2025-01-02",
    cvv: 123,
  },
  {
    id: 3,
    username: "Michael Johnson",
    email: "michael.johnson@gmail.com",
    usertype: "client",
    userpassword: 7,
    card_number: 1111111111111113,
    expiration_date: "2025-01-03",
    cvv: 123,
    card_number: 1111111111111113,
    expiration_date: "2025-01-03",
    cvv: 123,
  },
  {
    id: 4,
    username: "Emily Brown",
    email: "emily.brown@gmail.com",
    usertype: "client",
    userpassword: 8,
    card_number: 1111111111111114,
    expiration_date: "2025-01-04",
    cvv: 123,
    card_number: 1111111111111114,
    expiration_date: "2025-01-04",
    cvv: 123,
  },
  {
    id: 5,
    username: "William Lee",
    email: "william.lee@gmail.com",
    usertype: "client",
    userpassword: 9,
    card_number: 1111111111111115,
    expiration_date: "2025-01-05",
    cvv: 123,
    card_number: 1111111111111115,
    expiration_date: "2025-01-05",
    cvv: 123,
  },
  {
    id: 6,
    username: "Sophia Martinez",
    email: "sophia.martinez@gmail.com",
    usertype: "client",
    userpassword: 111,
    card_number: 1111111111111116,
    expiration_date: "2025-01-06",
    cvv: 123,
    card_number: 1111111111111116,
    expiration_date: "2025-01-06",
    cvv: 123,
  },
  {
    id: 7,
    username: "Oliver Wilson",
    email: "oliver.wilson@gmail.com",
    usertype: "client",
    userpassword: 756,
    card_number: 1111111111111117,
    expiration_date: "2025-01-07",
    cvv: 123,
    card_number: 1111111111111117,
    expiration_date: "2025-01-07",
    cvv: 123,
  },
  {
    id: 8,
    username: "Ava Johnson",
    email: "ava.johnson@gmail.com",
    usertype: "client",
    userpassword: 25,
    card_number: 1111111111111118,
    expiration_date: "2025-01-08",
    cvv: 123,
    card_number: 1111111111111118,
    expiration_date: "2025-01-08",
    cvv: 123,
  },
  {
    id: 9,
    username: "Ethan Taylor",
    email: "ethan.taylor@gmail.com",
    usertype: "client",
    userpassword: 482,
    card_number: 1111111111111119,
    expiration_date: "2025-01-09",
    cvv: 123,
    card_number: 1111111111111119,
    expiration_date: "2025-01-09",
    cvv: 123,
  },
  {
    id: 10,
    username: "Isabella Anderson",
    email: "isabella.anderson@gmail.com",
    usertype: "client",
    userpassword: 9876,
    card_number: 1111111111111121,
    expiration_date: "2025-01-11",
    cvv: 123,
    card_number: 1111111111111121,
    expiration_date: "2025-01-11",
    cvv: 123,
  },
  {
    id: 11,
    username: "Nov",
    email: "nov@gmail.com",
    usertype: "admin",
    userpassword: 1234,
    card_number: 1111111111111131,
    expiration_date: "2025-01-12",
    cvv: 123,
    card_number: 1111111111111131,
    expiration_date: "2025-01-12",
    cvv: 123,
  },
];

const insertUserQuery = "INSERT INTO users VALUES ?";

const userDataValues = usersData.map((user) => [
  user.id,
  user.username,
  user.email,
  user.usertype,
  user.userpassword,
  user.card_number,
  user.expiration_date,
  user.cvv,
  user.card_number,
  user.expiration_date,
  user.cvv,
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Foven_mitts.jpeg?alt=media&token=b8c71330-fbc7-48f3-9e81-cfa29eca23bc",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fbaking_pan.jpeg?alt=media&token=e2c60d8a-137f-42ff-b3ba-d47e2e8acf05",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fchef_knife.jpeg?alt=media&token=f11aab52-8fd7-4227-903a-f358b3815df6",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fbaking_mat.jpeg?alt=media&token=5e1f1086-c546-42b4-b575-e0e12dd3a19b",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fmixing_bowls.jpeg?alt=media&token=e3bc1854-6a42-4fcd-add3-1fbb12282b37",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fhand_mixer.jpeg?alt=media&token=227c64b9-c1fe-4a9c-93fe-b95b67fcd5ff",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Frolling_pin.jpeg?alt=media&token=6da82414-41ce-4df2-9937-6c71dbe71d28",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fbaking_soda.jpeg?alt=media&token=77d6a8b6-1f95-4746-9a05-e10040bd513f",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fmeasuring_cups.jpeg?alt=media&token=0ee46934-acdf-4d19-b853-8042ed3b8d94",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fkitchen_scale.jpg?alt=media&token=b733841d-41ee-4aad-ba5e-0e531884e776",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fcupcake_baking_kit.jpeg?alt=media&token=3a7a960c-54c3-4f07-bee1-97d3a50b4a5f",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fpiping_bags.jpeg?alt=media&token=faea5104-8192-41e4-b7ce-9dd01efd938a",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fbread_loaf_pan.jpeg?alt=media&token=59ab0555-e99c-49e5-b08b-568744fcacd0",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fcookie_cutters.jpeg?alt=media&token=bb91dcea-2c43-40ed-b4da-5fdbb6fec6f8",
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
    product_picture:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Fproducts%2Fmixing_spatula.jpeg?alt=media&token=65fc1de6-947c-4852-b4f4-cf9a0c8079a0",
    reviews: [],
  },
];

const insertProductQuery =
  "INSERT INTO products (product_id, product_name, brand, price, description, colors, in_stock, weight, product_picture) VALUES ?";

const productDataValues = ProductsData.map((product) => [
  product.product_id,
  product.product_name,
  product.brand,
  product.price,
  product.description,
  JSON.stringify(product.colors),
  product.in_stock,
  product.weight,
  product.product_picture,
]);

const createRecipeTableQuery = `
CREATE TABLE Recipe (
  receipt_id INT PRIMARY KEY,
  receipt_name VARCHAR(100),
  link VARCHAR(255),
  receipt_text LONGTEXT, 
  picture_url VARCHAR(255) -- Text field to store the URL of the picture
);`;

// const insertIntoRecipeQuery = `
// INSERT INTO Recipe (receipt_id, receipt_name, link, receipt_pdf, picture_url)
// VALUES
//     (1, 'Chocolate Cake Recipe', 'https://www.youtube.com/watch?v=_fJGviO5WQE', 'chocolate_cake_recipe.pdf', 'chocolate_cake_picture.jpeg'),
//     (2, 'Blueberry Muffins', 'https://cooking.nytimes.com/recipes/2868-jordan-marshs-blueberry-muffins', 'blueberry_muffins_recipe.pdf', 'blueberry_muffins_picture.jpeg'),
//     (3, 'Apple Pie', 'https://www.youtube.com/watch?v=VFQsDAADPLM', 'apple_pie_recipe.pdf', 'apple_pie_picture.jpeg'),
//     (4, 'Banana Bread', 'https://www.youtube.com/watch?v=qUmDpPfY_h0', 'banana_bread_recipe.pdf', 'https://www.example.com/banana_bread_picture.jpg'),
//     (5, 'Carrot Cake', 'https://www.youtube.com/watch?v=zoyhs-EiJxE', 'carrot_cake_recipe.pdf', 'carrot_cake_picture.jpeg');
// `;

const RecipeData = [
  {
    receipt_id: 1,
    receipt_name: "Chocolate Cake Recipe",
    link: "https://www.youtube.com/watch?v=_fJGviO5WQE",
    receipt_text:
      "Prep. Preheat the oven to 350º F. Prepare two 9-inch cake pans by spraying with baking spray or buttering and lightly flouring. Whisk dry ingredients. Add flour, sugar, cocoa, baking powder, baking soda, salt and espresso powder to a large bowl or the bowl of a stand mixer. Whisk through to combine or, using your paddle attachment, stir through flour mixture until combined well.",
    picture_url:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Frecipes%2Fchocolate_cake_picture.jpeg?alt=media&token=e59bc22e-66f9-4e69-b32f-f85679a80227",
  },
  {
    receipt_id: 2,
    receipt_name: "Blueberry Muffins",
    link: "https://cooking.nytimes.com/recipes/2868-jordan-marshs-blueberry-muffins",
    receipt_text:
      "Step 1, Whisk flour, sugar, baking powder, and a little salt in a large bowl. Step 2, Add oil, an egg, milk, and vanilla extract then stir with a fork until blended.Step 3, Mix in the blueberries, divide the batter between muffin cups and bake.",

    picture_url:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Frecipes%2Fblueberry_muffins_picture.jpeg?alt=media&token=275afd92-0ce9-4215-b1b9-6bfb31b4c370",
  },
  {
    receipt_id: 3,
    receipt_name: "Apple Pie",
    link: "https://www.youtube.com/watch?v=VFQsDAADPLM",
    receipt_text:
      "Heat oven to 425°F. Place 1 pie crust in ungreased 9-inch glass pie plate. Press firmly against side and bottom.In large bowl, gently mix filling ingredients; spoon into crust-lined pie plate. Top with second crust. Wrap excess top crust under bottom crust edge, pressing edges together to seal; flute. Cut slits or shapes in several places in top crust. Bake 40 to 45 minutes or until apples are tender and crust is golden brown. Cover edge of crust with 2- to 3-inch wide strips of foil after first 15 to 20 minutes of baking to prevent excessive browning. Cool on cooling rack at least 2 hours before serving.",

    picture_url:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Frecipes%2Fapple_pie_picture.jpeg?alt=media&token=77f3cf92-0193-421d-9df7-4ddcaadaf93b",
  },
  {
    receipt_id: 4,
    receipt_name: "Banana Bread",
    link: "https://www.youtube.com/watch?v=qUmDpPfY_h0",
    receipt_text:
      "Place a rack in center of oven; preheat to 350°. Grease an 8 1/2 metal loaf pan with cooking spray and line with parchment, leaving an overhang on both long sides. In a medium bowl, whisk flour, baking soda, and salt until combined. In a large bowl, whisk eggs, brown sugar, and butter until smooth. Add bananas and vanilla and whisk until well combined (batter will be slightly lumpy). Fold in dry ingredients until incorporated. Pour batter into prepared pan; smooth top with a rubber spatula. Bake bread until risen, golden brown on top, and a tester inserted into the center comes out with a few moist crumbs attached, 50 to 60 minutes. ",
    picture_url:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Frecipes%2Fbanana_bread_picture.jpg?alt=media&token=4e24016f-6a88-4579-9ee0-0b2f17bbd50b",
  },
  {
    receipt_id: 5,
    receipt_name: "Carrot Cake",
    link: "https://www.youtube.com/watch?v=zoyhs-EiJxE",
    receipt_text:
      "Dry ingredients in one bowl, wet ingredients in another: I like to whisk my dry ingredients together in one bowl until they are well blended. Then I whisk all the wet ingredients together in another bowl. Fold the dry and wet ingredients together: Then I switch to a rubber spatula or large spoon and fold the two — wet and dry ingredients — together until I don’t see any large streaks of flour. Add carrots, nuts, and raisins: When I’ve got the batter ready, I fold in the carrots, and if I’m using them, the nuts and raisins.",
    picture_url:
      "https://firebasestorage.googleapis.com/v0/b/finalprojectfullstack-2023.appspot.com/o/pictures%2Frecipes%2Fcarrot_cake_picture.jpeg?alt=media&token=40836ddc-0d6f-424d-b891-8b6aa0c1a51a",
  },
];
const insertRecipeQuery =
  "INSERT INTO recipe (receipt_id, receipt_name, link, receipt_text, picture_url) VALUES ?";
const recipeDataValues = RecipeData.map((recipe) => [
  recipe.receipt_id,
  recipe.receipt_name,
  recipe.link,
  recipe.receipt_text,
  recipe.picture_url,
]);

// const createReviewsTableQuery = `
// CREATE TABLE IF NOT EXISTS reviews (
//   review_id INT PRIMARY KEY,
//   recipe_id INT NOT NULL,
//   user VARCHAR(255) NOT NULL,
//   rating DECIMAL(2, 1) NOT NULL,
//   comment TEXT NOT NULL,
//   FOREIGN KEY (recipe_id) REFERENCES Recipe (receipt_id) ON DELETE CASCADE
// );`;

// const insertIntoReviewsQuery = `
// INSERT INTO reviews (review_id, recipe_id, user, rating, comment)
// VALUES
//     (1, 1, 'Alice', 4.5, 'Delicious chocolate cake! The whole family loved it.'),
//     (2, 1, 'Bob', 5.0, 'The best chocolate cake I've ever had! A must-try recipe.'),
//     (3, 2, 'Charlie', 4.0, 'Yummy blueberry muffins! Perfect for breakfast.'),
//     (4, 2, 'David', 4.5, 'Great recipe! I added a little lemon zest for extra flavor.'),
//     (5, 3, 'Eva', 4.8, 'Classic apple pie recipe. Always a crowd-pleaser!'),
//     (6, 3, 'Frank', 3.5, 'The pie was good, but I prefer a sweeter filling.'),
//     (7, 4, 'Grace', 4.2, 'Delicious banana bread! Moist and flavorful.'),
//     (8, 4, 'Hannah', 4.0, 'Nice recipe! I added some walnuts for extra crunch.'),
//     (9, 5, 'Isaac', 4.7, 'Wonderful carrot cake! Cream cheese frosting is perfect.'),
//     (10, 5, 'Jane', 4.3, 'Carrot cake is not my favorite, but this recipe was good.');
// `;
const createCartTableQuery = `
CREATE TABLE IF NOT EXISTS mycart (
  cart_id INT AUTO_INCREMENT PRIMARY KEY,
  id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE
);
`;
