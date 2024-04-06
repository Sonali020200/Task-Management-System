const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {blacklist} = require('../blacklist');
const { userModel } = require('../models/userModel');
const { blacklistedTokenModel } = require('../models/blacklistModel');
require('dotenv').config();


const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.status(200).json({msg: "Welcome to our webpage!"})
})



userRouter.post("/register", async (req, res) => {
    const { userName, email, pass } = req.body ;
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                res.status(400).json({msg: "Please try again!", err});
            } else {
                const user = new userModel({
                    userName,
                    email,
                    pass: hash
                });
                await user.save();
                res.status(200).json({msg: "Registration Successful!", newUser});
            }
        });

    } catch (err) {
        res.status(400).json({msg: "Internal server error", err});
    }
})



userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body ;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userId: user._id, userName: user.userName }, process.env.tokenKey, { expiresIn: '1d' });
                    res.status(200).json({Message:"Login Successful!", user: user, token: token});
                } else {
                    res.status(200).json({msg: 'Please check your password!'})
                }
            })
        } else {
            res.send("Wrong Credntials!")
        }
    } catch (err) {
        res.status(400).json({msg: "Internal Server Error", err});
    }
})



userRouter.get('/logout', async (req, res) => {
    const token = req.headers.authorization;
    try {
      const tokenToBeBlacklisted = new blacklistedTokenModel({ token });
      await tokenToBeBlacklisted.save();
      res.status(200).json({ msg: 'Logout successful!' });
    } catch (err) {
      res.status(400).json({msg: 'Internal server error', err});
    }
});



module.exports = {
    userRouter
}