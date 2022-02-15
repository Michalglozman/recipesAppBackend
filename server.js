const dotenv = require("dotenv");
require("dotenv").config();
console.log(process.env);
require("./src/db/mongoose");
const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(`${__dirname}/public/`));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("req body", req.body);
  res.json("get test");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.set("Content-Type", "application/json");
  next();
});
const userRouter = require("./src/Router/userRouter");
const recipeRouter = require("./src/Router/recipeRouter.js");
const recipeBlackListRouter = require("./src/Router/recipeBlackListRouter");
app.use("/user", userRouter);
app.use("/recipe", recipeRouter);
app.use("/blacklist", recipeBlackListRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server on *:${port}`);
});
