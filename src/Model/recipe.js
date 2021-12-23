
const mongoose = require('mongoose');

const recipeData = mongoose.model('recipe', {
    userId: {
        type: String
    },
    day: {
        type: String 
    },
    image:{
        type: String
    },
    url:{
        type: String
    },
    recipeName:{
        type: String
    }
},'recipe');

module.exports = recipeData;