require('dotenv').config()
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
    res.header('Access-Control-Allow-Methods',  'GET, POST, DELETE, PUT');
    res.set('Content-Type', 'application/json','Authorization','x-access-token');
    next();
   });
const userRouter = require('./src/Router/userRouter');
const recipeRouter = require('./src/Router/recipeRouter.js');
const recipeBlackListRouter = require('./src/Router/recipeBlackListRouter');
const authController = require('./src/Controllers/authController');

app.use('/user/', userRouter);
app.use('/recipe/',recipeRouter);
app.use('/blacklist/',recipeBlackListRouter);

app.listen(process.env.PORT || 3001, ()=> {
    console.log('Server on');
});