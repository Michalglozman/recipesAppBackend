// const mongoose = require("mongoose");

// const recipeData = mongoose.Schema(
//   "recipes",
//   {
//     userId: {
//       type: String,
//     },
//     day: {
//       type: String,
//     },
//     hour: {
//       type: Number,
//     },
//     week: {
//       type: Number,
//     },
//     image: {
//       type: String,
//     },
//     url: {
//       type: String,
//     },
//     recipeName: {
//       type: String,
//     },
//     approved: {
//       type: String,
//     },
//     recipeType: {
//       type: Number,
//     },
//     ingredients: {
//       type: String,
//     },
//     description: {
//       type: String,
//     },
//   },
//   "recipes"
// );

// module.exports = recipeData;

const mongoose = require("mongoose");

const recipeData = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    day: {
      type: String,
    },
    hour: {
      type: Number,
    },
    week: {
      type: Number,
    },
    image: {
      type: String,
    },
    url: {
      type: String,
    },
    recipeName: {
      type: String,
    },
    approved: {
      type: String,
    },
    recipeType: {
      type: Number,
    },
    ingredients: {
      type: String,
    },
    description: {
      type: String,
    },
  },
);

module.exports = recipeData;
