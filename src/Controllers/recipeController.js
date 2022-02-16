const axios = require('axios');
const recipeData = require('../Model/recipe');
const recipeBlackList = require('../Model/recipeBlackList');
const saveRecipe = async(req, res) => {
    let day = req.body.day;
    const hour = req.body.hour;
    let week = req.body.week;
    const recipeType = req.body.recipeType; //0 from the internet 1 personal
    const ingredients = req.body.ingredients;
    const url = req.body.url;
    const imageUrl = req.body.imgUrl;
    const recipeName = req.body.recipeName;
    const userId = req.body.user;
    const description = req.body.description;
    const repeat = req.body.repeat;
    let approved = req.body.approved;
    console.log(approved);
    approved = recipeType == 0 || approved == "approved";
    console.log(approved);
    const recipeParams = {};
    recipeParams['day'] = day;
    recipeParams['image'] = imageUrl;
    recipeParams['userId'] = userId;
    recipeParams['url'] = url;
    recipeParams['hour'] = hour;
    recipeParams['week'] = week;
    recipeParams['recipeType'] = recipeType;
    recipeParams['ingredients'] = ingredients;
    recipeParams['recipeName'] = recipeName;
    recipeParams['description'] = description;
    recipeParams['approved'] = approved ? "approved" : "waiting";
    recipeParams['week'] = week;
    recipeParams['day'] = day;
    const recipeToSave = new recipeData(recipeParams);
    const recipes = [recipeToSave]
    for (let index = 1; index < repeat; index++) {
        day++;
        if (day > 7) {
            week++;
            day = 1;
        }
        recipeParams['week'] = week;
        recipeParams['day'] = day;
        const rpeatRecipeToSave = new recipeData(recipeParams);
        recipes.push(rpeatRecipeToSave)
    }

    recipeData.insertMany(recipes).then(() =>{
        console.log("success!!!");
        res.status(200).send();
    }).catch((e) => {
        console.error("Error When adding recipe" + e);
        res.status(500).send();
    })
}

const deleteRecipe = async(req, res) => {
    const id = req.body.id;
    console.log("deleting: " + id);
    recipeData.findOne({ _id: id}).then((recipe) =>{
        if(!recipe){
            return res.status(400).send("Recipe dosent exist");
        }
        recipe.deleteOne({ _id: id})
        .then(() =>{
            res.status(200).send();
        }).catch((error) => {
            console.error("Error when deleting recipe"+error );
            res.status(400).send();
        });
    })
}

const getBlackList = async () => {
    const blacklist = await recipeBlackList.find({}).exec().then((blackList)=>{
        return blackList.map((entry)=> {
            return entry['url'];
        });
    }).catch((err)=>{
        console.log(err);
        return [];
    });
    return blacklist;
}

const getRecipesByIngredients = async(req, res) => {
    const ingredients = req.query.ingredients;
    const blackList = await getBlackList();
    console.log(blackList);
    const params = {
        app_id: `${process.env.FOOD_API_ID}`,
        app_key: `${process.env.FOOD_API_KEY}`,
        type: "public",
        q: ingredients
        };
    axios.get("https://api.edamam.com/api/recipes/v2",{params})
        .then(response => {
            const recipes = response.data.hits.filter((element)=>{
                return !blackList.includes(element['recipe']['url']);
            });
            res.send(recipes);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Get recipe by ingredients failed");
        })
  } 

  const getRecipesByUser = async(req, res) => {
    const user = req.query.user;
    const week = req.query.week;
    const query ={userId: user};
    if (week != null){
        query['week'] = week;
        query['approved'] = "approved";
    }
    else {
        query['recipeType'] = 1;
    }
    recipeData.find(query).then((recipes) =>{
        res.send(recipes);
        console.log(`fetching recepies for ${user}`);
        console.log(recipes);
    }).catch((e) => {
        res.status(500).send();
    });
  } 

  const getRecipesToApprove = async(req, res) => {
    const query ={'approved': 'waiting'};
    recipeData.find(query).then((recipes) =>{
        res.send(recipes);
    }).catch((e) => {
        res.status(500).send();
    });
  } 

  const changeApprovalStatus = async(req, res) => {
    const id = req.body.id;
    const approved = req.body.approved;
    const recipeParams = {'approved':approved}
    recipeData.findOneAndUpdate({_id: id},recipeParams).then(() =>{
        res.status(200).send();
    }).catch((e) => {
        res.status(500).send();
    });
  } 

  const updateRecipe = async(req, res) => {
    const id = req.body.id;
    const description = req.body.description;
    const ingredients = req.body.ingredients;
    const recipeName = req.body.name;
    const imgUrl = req.body.imgurl;
    const url = req.body.url;
    const recipeParams = {};
    recipeParams['image'] = imgUrl;
    recipeParams['url'] = url;
    recipeParams['ingredients'] = ingredients;
    recipeParams['recipeName'] = recipeName;
    recipeParams['description'] = description;
    recipeParams['approved'] = "waiting";
    recipeParams['recipeName'] = recipeName;

    recipeData.findOneAndUpdate({_id: id},recipeParams).then(() =>{
        res.status(200).send();
    }).catch((e) => {
        res.status(500).send();
    });
  } 
  module.exports={getRecipesToApprove,changeApprovalStatus,updateRecipe,deleteRecipe,saveRecipe,getRecipesByIngredients,getRecipesByUser};