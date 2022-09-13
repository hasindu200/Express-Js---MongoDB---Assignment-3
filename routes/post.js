const express = require('express')
const postRouter = express().Router()
const Post = require('../models/userPost.model')

postRouter.post('/',async (req,res) =>{
    const post = new Post({
        userId: req.body.userId,
        date : req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body
    })

    try {
        const response = await post.save()
        res.json(response)
    }catch (err) {
        res.send('Err:' + err)
    }
})


postRouter.get('/',async (req,res) =>{
    try {
        const posts = await Post.find()
        res.send(posts)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

postRouter.get('/:id',async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    }catch (err) {
    }
})

postRouter.delete('/:id',async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        const response = await post.remove()
        res.json(response)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

postRouter.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        post.userId = req.body.userId,
            post.date = req.body.date,
            post.time = req.body.time,
            post.title = req.body.title,
            post.body = req.body.body

        const response = await post.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = postRouter
