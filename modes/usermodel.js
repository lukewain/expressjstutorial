const mongoose = require('mongoose') // importing mongoose

// making a schema and describing how our user data will look
const Userdata = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserData', Userdata)