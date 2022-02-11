
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
    },
    userType: {
        type: Number
    }
},'user');

module.exports = userData;