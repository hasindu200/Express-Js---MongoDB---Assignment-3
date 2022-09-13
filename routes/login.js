const  express = require('express')
const app = express()
const loginRout = express.Router()

app.use(express.json())

const userModel = require('../models/user.model')

loginRout.get('/',async (req,res)=>{
    const enterData = req.body
    try{
        const user = await userModel.find()
        user.map((u)=>{
            if(u.username === enterData.username){
                if(u.password === enterData.password){
                    res.json(u.id)
                }else{
                    res.send("Invalid User Name or Password")
                }
            }
        })
    }catch (err){
        res.send(err)
    }
})
module.exports = loginRout