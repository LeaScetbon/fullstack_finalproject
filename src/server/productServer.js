const express = require("express");
const connection = require("./connection.js");
const cors = require("cors");
const bodyParser = require("body-parser");
// const crypto = require('crypto');

const router = express.Router();

router.use(bodyParser.json());

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

router.get("/Products", (req, res) => {
  const { product_name } = req.query;
  const query = "SELECT * FROM products ";
  connection.query(query, [product_name], (error, results) => {
    console.log(error);
    console.log(results);
    if (error) {
      console.error("Error executing the query: ", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

router.post("/Products", (req, res) => {
  const {
    product_name,
    brand,
    price,
    description,
    colors,
    in_stock,
    weight,
    product_picture,
  } = req.body;

  if (
    !product_name ||
    !brand ||
    !price ||
    !description ||
    !colors ||
    typeof in_stock !== "boolean" ||
    !weight ||
    !product_picture
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const productId = Math.floor(Math.random() * 100000);

  // Execute the query to insert the product data into the database
  connection.query(
    "INSERT INTO products (product_id, product_name, brand, price, description, colors, in_stock, weight, product_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      productId,
      product_name,
      brand,
      price,
      description,
      JSON.stringify(colors),
      in_stock,
      weight,
      product_picture,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: "An error occurred while adding the product" });
      }

      // Product added successfully
      const newProduct = {
        product_id: productId,
        product_name,
        brand,
        price,
        description,
        colors,
        in_stock,
        weight,
        product_picture,
      };
      res.status(201).json(newProduct);
    }
  );
});

router.delete("/products/:product_id", (req, res) => {
  const productId = req.params.product_id;
  const connection = require("./connection.js");

  const deleteQuery = "DELETE FROM products WHERE product_id = ?";
  connection.query(deleteQuery, [productId], (error, result) => {
    if (error) {
      console.error("Error deleting the product: ", error);
      return res
        .status(500)
        .json({ error: "An error occurred while deleting the product" });
    }

    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Product deleted successfully" });
    } else {
      return res.status(404).json({ error: "Product not found" });
    }
  });
});

module.exports = router;
