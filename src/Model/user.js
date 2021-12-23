
const mongoose = require('mongoose');

const userData = mongoose.model('user', {
    userId: {
        type: String
    },
    firstName: {
        type: String 
    },
    lastName:{
        type: String
    },
    password:{
        type: String
    }
},'user');

module.exports = userData;