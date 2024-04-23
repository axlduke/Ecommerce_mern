const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/Users')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/fms")

//#region AUTHENTICATION LOGIN START

app.post('/login', (req, res) => {
    const { emailOrUsername, password} = req.body
    UserModel.findOne({ $or: [{ email: emailOrUsername }, { username: emailOrUsername }] })
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Succes")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record Exist")
        }
    })
})
//#endregion AUTHENTICATION LOGIN END

app.listen(3001, () => {
    console.log("server ongoing")
})