const express = require('express')
const userRout = express.Router()
const User =  require('../models/user.model')

userRout.post('/',async (req,res)=>{

    const user = new User({
        firstName : req.body.firstName,
        surName : req.body.surName,
        gender : req.body.gender,
        dateOfBirth : req.body.dateOfBirth,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    })

})