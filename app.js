const express = require('express')
const mongoose = require('mongoose')
const login = require('./routes/login')
const post = require('./routes/post')
const user = require('./routes/user')
const port = 4000;
const app = express()

app.use(express.json());

const url = 'mongodb://127.0.0.1/express'

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection


con.on("open", ()=>{
    console.log('MongoDB Connected');
})


app.listen(port,(req,res) => {
    console.log(`Example app listening on port ${port}`);
})


app.use('/login',login)
app.use('/user',user)
app.use('/post',post)
