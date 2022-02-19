
const mongoose = require('mongoose');

const recipeBlackList = mongoose.model('recipeBlackList', {
    url: {
        type: String
    },
    status: {
        type: String
    }
},'recipeBlackList');

module.exports = recipeBlackList;