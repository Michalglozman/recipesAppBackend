const deleteRecipeadm = require("../Model/deleteRecipe");

const deleteRecipeAdmin = async (req, res) => {
  const id = req.body.id;
  console.log("deleting: " + id);
  recipeData.findOne({ _id: id }).then((recipe) => {
    if (!recipe) {
      return res.status(400).send("Recipe dosent exist");
    }
    recipe
      .deleteOne({ _id: id })
      .then(() => {
        res.status(200).send();
      })
      .catch((error) => {
        console.error("Error when deleting recipe" + error);
        res.status(400).send();
      });
  });
};

module.exports = { deleteRecipeAdmin };
