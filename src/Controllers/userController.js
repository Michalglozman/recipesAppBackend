const axios = require('axios')
const userData = require('../Model/user')
const path = require('path');
const connectedUsers = [];
var cookies = require('cookie-parser');

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

        res.cookie('userId',userId, { maxAge: 900000, httpOnly: true });
        res.redirect('https://recipmeappfrontend.herokuapp.com/recipesList.html');
    })
}

const userConnected = async(req, res, next) => {
    var userId = req.cookies.userId;

    if(userId === undefined || !connectedUsers.includes(userId)){
        return res.redirect('https://recipmeappfrontend.herokuapp.com/login.html');
    }

    return next();
}
module.exports={userConnected,loginUser};
