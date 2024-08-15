require("dotenv").config();

const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", noteRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
