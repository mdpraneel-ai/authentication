const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

// Authentication routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
