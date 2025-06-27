require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const notesRouter = require("./routes/notesRoutes");
const app = express();
const port = process.env.PORT || 5000;

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRouter);
// start server
app.listen(port, () => {
  console.log(`http;//localhost${port}`);
});
