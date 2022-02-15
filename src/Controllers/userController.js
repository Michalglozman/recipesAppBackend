const axios = require("axios");
const userData = require("../Model/user");
const path = require("path");
const UserModel = require("../Model/user");

const loginUser = async (req, res) => {
  console.log("enter to loginUser");
  const userId = req.query.userId; // email
  const password = req.query.password;
  console.log({ userId: userId, password: password });
  UserModel.findOne({ userId: userId, password: password })
    .then((user) => {
      console.log("user model then:");
      console.log("{user}", { user }); // TODO: remove log
      res.setHeader("Content-Type", "text/plain");
      if (!user) {
        console.log("no user"); // TODO: remove log
        return res.status(404).send("login failed");
      }
      console.log(userId + " connected");

      return res.status(200).send(user);
    })
    .catch((err) => {
      console.log("user model catch");
      console.log("err", { err }); // TODO: remove log
      console.log(err);
      return res.status(500);
    });
};
const usersRecipes = async (req, res) => {
  const userId = req.query.userId;
  UserModel.find({ userId: { $ne: userId } })
    .then((users) => {
      console.log(users);
      res.setHeader("Content-Type", "text/plain");
      return res.status(200).send(users);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });
};

module.exports = { loginUser, usersRecipes };
