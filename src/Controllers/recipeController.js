const axios = require('axios')
const recipeData = require('../Model/recipe')
const saveRecipe = async(req, res) => {
    const request_data = req.body;
    const day = req.body.day;
    const url = req.body.url;
    const imageUrl = req.body.imgUrl;
    const recipeName = req.body.recipeName;
    var userId = req.cookies.userId

    const recipeParams = {};
    recipeParams['day'] = day;
    recipeParams['image'] = imageUrl;
    recipeParams['userId'] = userId;
    recipeParams['url'] = url;
    recipeParams['recipeName'] = recipeName;

    const recipeToSave = new recipeData(recipeParams);
    recipeToSave.save().then(() =>{
        console.log("success!!!");
        res.redirect('/public/schedule.html');
    }).catch((e) => {
        console.error("Error When adding recipe" + e);
        res.status(500);
    })
}

const deleteRecipe = async(req, res) => {
    const id = req.params.id;
    recipeData.findOne({ _id: id}).then((recipe) =>{
        if(!recipe){
            return res.status(400).send("Recipe dosent exist");
        }
        recipe.deleteOne({ _id: id})
        .then(() =>{
            res.status(200).send('success');
        }).catch((error) => {
            console.error("Error when deleting recipe"+error );
            res.status(400);
        });
    })
}

const getRecipesByIngredients = async(req, res) => {
    let ingredients = req.query.ingredients;
    const params = {
        app_id: `${process.env.FOOD_API_ID}`,
        app_key: `${process.env.FOOD_API_KEY}`,
        type: "public",
        q: ingredients
        };
    axios.get("https://api.edamam.com/api/recipes/v2",{params})
        .then(response => {
            res.send(response.data.hits)
        })
        .catch(error => {
            console.error(error)
            res.status(500).send("Get recipe by ingredients failed")
        })
  } 

  const getRecipesByUser = async(req, res) => {
    const user = req.cookies.userId;
    recipeData.find({userId: user}).then((recipes) =>{
        res.send(recipes);
    }).catch((e) => {
        res.status(500).send();
    });
  } 
  module.exports={deleteRecipe,saveRecipe,getRecipesByIngredients,getRecipesByUser};