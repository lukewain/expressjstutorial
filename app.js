const express = require('express') // importing express
const mongoose = require('mongoose') // importing mongoose
const app = express() //executing express
require('dotenv/config') // importing dotenv module to hide special keys (no need for variable)
const cors = require("cors")
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
/* // middlewares (a function that executes when a specific route is fired)

app.use('/posts', () => { // this middleware only runs when the /posts route runs
    console.log('this is a middleware running')

}) */


// IMPORTNG ROUTES FROM OTHER FILES
const postsRoute = require('./routes/posts')
const userRoute = require('./routes/user')

app.use('/posts', postsRoute)
app.use('/user', userRoute)

// routes
app.get('/', (req,res) => { // "get" gets us the information. "post" posts the information. "patch" updates the information. "delete" deletes the information.
    res.send('we are online ')
})



// connecting to mongodb 
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB!')
})

// listening to the server
app.listen(3000)