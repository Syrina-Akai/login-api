const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./db");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(cors({ origin: ['http://localhost:5173',' https://login-project-beta-rose.vercel.app/'], credentials: true }));


// Connect DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API running");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
