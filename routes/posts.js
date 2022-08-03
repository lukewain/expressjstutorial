const express = require('express') // import express
const router = express.Router() // importing our own router function so we can import it to app.js
const Post = require('../models/Post')

// GET BACK ALL POSTS
router.get('/', async (req,res) => {  // making our /post route
    try {
        const posts = await Post.find()
        res.json(posts)
    }catch(err) {
        res.json({message:err})
    }
})

router.get('/specific', (req,res) => {  // making a specific /post route
    res.send('we are on specific posts')
})

// SUBMIT A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try{
   const savedPost = await post.save()
    res.json(savedPost)
    }catch(err){
        res.json({message: err})
    }
})

// GET BACK A SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
    }catch(err){
        res.json({message: err})
    }
})

// DELETE POST
router.delete('/:postID', async (req,res) => {
    try {
    const removedPost = await Post.remove({_id: req.params.postId})
    res.json(removedPost)
    }catch (err) {
        res.json({ message: err})
    }
})

// UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
    const updatedPost = await Post.updateOne ({_id: req.params.postId}, {$set: {title: req.body.title}})
        res.json(updatedPost)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router; // exporting the router
