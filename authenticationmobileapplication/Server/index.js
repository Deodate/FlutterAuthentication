const express = require("express");
const { Pool } = require("pg");
const authRouter = require("./routes/auth"); // Import the auth router

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the auth router for all "/auth" routes
app.use("/auth", authRouter);

// Database connection configuration
const pool = new Pool({
  user: "postgres",         // Your PostgreSQL username
  host: "localhost",        // Hostname (use localhost if running locally)
  database: "flutter",      // Your database name
  password: "postgres",     // Your PostgreSQL password
  port: 5432,               // Default PostgreSQL port
});

// Check database connection
pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the database.");
  }
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
