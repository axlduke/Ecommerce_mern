const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    emai:{
        type: String,
        require: true
    },
    office:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel