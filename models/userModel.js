const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    pass: String
},{
    versionKey: false
})




const userModel = mongoose.model('users', userSchema);



module.exports = {
    userModel
}