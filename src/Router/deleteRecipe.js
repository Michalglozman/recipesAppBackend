const express = require("express");
const { deleteRecipeAdm } = require("../Controllers/deleteRecipeAdmin");
const router = express.Router();

router.delete("/", deleteRecipeAdm.deleteRecipeAdmin);

module.exports = router;
