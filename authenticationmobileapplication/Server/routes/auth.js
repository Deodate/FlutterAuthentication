const express = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const authRouter = express.Router();

// Sign Up
authRouter.post("/api/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ msg: "User with the same email already exists!" });
        }

        const hashedPassword = await bcryptjs.hash(password, 8);

        const user = await User.create({
            email,
            password: hashedPassword,
            name,
        });

        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Sign In  
authRouter.post("/api/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ msg: "User with this email does not exist!" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Incorrect password!" });
        }
        
        res.json({ msg: "Signed in successfully", user });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = authRouter;