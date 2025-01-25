const express = require("express");
const authRouter = express.Router();

// Sign Up
authRouter.post("/api/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Assuming User is a model you're importing from your database ORM (like Mongoose)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User with the same email already exists!" });
        }

        // Add your logic here to create a new user if no existing user is found.

        res.status(200).json({ msg: "User registered successfully!" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: "An error occurred while signing up." });
    }
});

module.exports = authRouter; // Export the router
