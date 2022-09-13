const mongoose = require('mongoose')

const postmenSchema = new mongoose.Schema({

    userId :{
        type:String,
        required:true
    },

    date :{
        type:Date,
        required: true
    },

    time:{
        type:String,
        required:true
    },

    title:{

        type:String,
        required:true

    },

    body:{

        type:String,
        required:true
    }


})

module.exports = mongoose.model('Post',postmenSchema)