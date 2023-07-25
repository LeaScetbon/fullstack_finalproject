const express = require("express");
const usersRouter = require("./userServer"); // Import the userServer router
const productsRouter = require("./productServer");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

app.use("/", usersRouter); // Mount the userServer router
app.use("/", productsRouter);

// Start the server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
