const express = require("express");
const sequelize = require("./config/database");
const authRouter = require("./routes/auth");
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the auth router
app.use(authRouter);

// Database connection and server startup
const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('Connected to the database.');
    
    // Sync all models with database
    await sequelize.sync();
    console.log('Database synchronized');

    // Start the server
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();