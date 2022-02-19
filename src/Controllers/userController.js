require("dotenv").config();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const userData = require("../Model/user");
const path = require("path");

activeTokens = [];
const loginUser = async (req, res) => {
  const userId = req.query.userId;
  const password = req.query.password;
  userData
    .findOne({ userId: userId, password: password })
    .then((user) => {
      res.setHeader("Content-Type", "text/plain");
      if (!user) {
        return res.status(404).send("login failed");
      }
        const accessToken=jwt.sign({id:userId},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: "5h",
          });
        return res.status(200).send({user:{userId:user.userId,
                                            userType:user.userType,
                                            userName:user.firstName},accessToken:accessToken});
    }).catch((err)=>{
        console.log(err);
        return res.status(500);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });
};

const usersRecipes = async (req, res) => {
  const userId = req.query.userId;
  userData
    .find({ userId: { $ne: userId } })
    .then((users) => {
      console.log(users);
      res.setHeader("Content-Type", "text/plain");
      return res.status(200).send(users);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });
};

module.exports = { loginUser, usersRecipes };
