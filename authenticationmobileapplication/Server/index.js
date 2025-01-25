const express = require("express");
const { Pool } = require("pg"); // Import Pool

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Database connection configuration
const pool = new Pool({
  user: "postgress",         // Your PostgreSQL username
  host: "localhost",         // Hostname (use localhost if running locally)
  database: "flutter",       // Your database name
  password: "postgress",     // Your PostgreSQL password
  port: 5432,                // Default PostgreSQL port
});

// Check database connection
pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the database.");
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});
