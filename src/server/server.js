const express = require("express");
const usersRouter = require("./userServer"); // Import the userServer router
const productsRouter = require("./productServer");
const myCartRouter = require("./myCartServer");
const recipeRouter = require("./recipeServer");
const paymentRouter = require("./PaymentDetailsServer");
const productDetailsRouter = require("./ProductDetailsServer");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

app.use("/", usersRouter); // Mount the userServer router
app.use("/", productsRouter);
app.use("/", myCartRouter);
app.use("/", recipeRouter);
app.use("/", paymentRouter);
app.use("/", productDetailsRouter);

// Start the server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
