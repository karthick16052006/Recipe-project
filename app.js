// Load environment variables
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
const recipeRoutes = require("./routes/recipes");
const ingredientRoutes = require("./routes/ingredients");
const userRoutes = require("./routes/users");

app.use("/api/recipes", recipeRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Simple Recipe Book API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
