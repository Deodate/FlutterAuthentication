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

        const hashedPassword = await bcryptjs.hash(password, 8);

        let user = new User({
            email,
            password: hashedPassword,
            name,
        });

        // Add your logic here to create a new user if no existing user is found.
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = authRouter; // Export the router
