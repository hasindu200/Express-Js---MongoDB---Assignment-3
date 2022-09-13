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
    try {
        const response = await user.save()
        res.json(response)
    }catch (err) {
        res.send('Err:' + err)
    }
})

userRout.get('/',async (req,res) =>{
    try {
        const users = await User.find()
        res.send(users)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

userRout.get('/:id',async (req,res) =>{
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch (err) {
    }
})

userRout.delete('/:id',async(req,res)=> {

    try {
        const user = await User.findById(req.params.id)
        const response = await user.remove()
        res.json(response)
    } catch (err) {
        res.send('Err:' + err)
    }

})


userRout.put('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        user.firstName = req.body.firstName,
            user.surName = req.body.surName,
            user.gender = req.body.gender,
            user.dateOfBirth = req.body.dateOfBirth,
            user.password = req.body.password,
            user.phoneNumber = req.body.phoneNumber,
            user.email = req.body.email

        const response = await user.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }
})


module.exports = userRout