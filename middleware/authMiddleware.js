const jwt = require('jsonwebtoken');
const {blacklist} = require('../blacklist');
require('dotenv').config();

const auth = (req, res, next) => {
        const token = req.headers.authorization;
        if (token) {
            if (blacklist.includes(token)) {
                res.json({msg: 'Please login!'})
            }
            jwt.verify(token, process.env.tokenKey, async (err, decoded) => {
                if (decoded) {
                    req.body.userId = decoded.userId;
                    req.body.userName = decoded.userName;
                    next() ;
                } 
            })
        } else {
                res.status(400).json({msg: 'You are not authorized'});
            }
        
    } 


module.exports = { 
    auth 
}