require('dotenv').config()
console.log(process.env)
require('./src/db/mongoose');
const path = require('path');
const express= require ('express');
require('dotenv').config();
const app= express();
app.use(express.urlencoded( { extended: true } ));
app.use('/public',express.static(`${__dirname}/public/`));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods',  'GET, POST, DELETE');
    res.set('Content-Type', 'application/json');
    next();
   });
const userRouter = require('./src/Router/userRouter');
const recipeRouter = require('./src/Router/recipeRouter.js');
app.use('/user/', userRouter);
app.use('/recipe/', recipeRouter);

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Server on');
});