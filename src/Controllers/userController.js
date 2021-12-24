const axios = require('axios')
const userData = require('../Model/user')
const path = require('path');
const connectedUsers = [];

const loginUser = async(req, res) => {
    const userId = req.query.userId;
    const password = req.query.password;

    userData.findOne({ userId: userId, password:password}).then((user) =>{
        res.setHeader("Content-Type", "text/plain");
        if(!user){
            return res.status(404).send("login failed");
        }
        connectedUsers.push(userId);
        setTimeout(()=>{
            console.log("removing "+userId);
            index=connectedUsers.indexOf(userId);
            connectedUsers.splice(index, 1);
        }, 1200*1000);

        res.redirect(`https://michalglozman.github.io/RecipiesAppFrontend/recipesList.html?user=${userId}`);
    })
}

const userConnected = async(req, res, next) => {
    var userId = req.query.user;
    console.log("user " + " is accesing the server")
    if(userId === undefined || !connectedUsers.includes(userId)){
        console.log(userId + "is not in" + connectedUsers);
        return res.status(403);
    }

    return next();
}
module.exports={userConnected,loginUser};
