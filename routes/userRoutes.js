const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../models/userModel');
require('dotenv').config();


const userRouter = express.Router();





module.exports = {
    userRouter,
}