require('dotenv').config();
const jwt = require('jsonwebtoken')
const axios = require('axios');
const userData = require('../Model/user');
const path = require('path');

const loginUser = async(req, res) => {
    const userId = req.query.userId;
    const password = req.query.password;
    userData.findOne({ userId: userId, password:password}).then((user) =>{
        res.setHeader("Content-Type", "text/plain");
        if(!user){
            return res.status(404).send("login failed");
        }
        const accessToken=jwt.sign(userId,process.env.ACCESS_TOKEN_SECRET);
        res.json({accessToken: accessToken})
        return res.status(200).send(user);
    }).catch((err)=>{
        console.log(err);
        return res.status(500);
    })
}
const usersRecipes = async(req, res) => {
    const userId = req.query.userId;
    userData.find( { userId: { $ne:  userId } } )
    .then((users) =>{
        console.log(users)
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(users);
    }).catch((err)=>{
        console.log(err);
        return res.status(500);
    })
}

module.exports={loginUser,usersRecipes};
