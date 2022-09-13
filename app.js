const express = require('express')
const mongoose = require('mongoose')
const login = require('./routes/login')
const port = 4000;
const app = express()




const url = 'mongodb://127.0.0.1/express'

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection


app.listen(port,(req,res) => {
    console.log(`Example app listening on port ${port}`);
})


app.use('/login',login)