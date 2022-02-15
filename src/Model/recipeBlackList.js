// const mongoose = require("mongoose");

// const recipeBlackList = mongoose.Schema(
//   "recipeBlackList",
//   {
//     url: {
//       type: String,
//     },
//   },
//   "recipeBlackList"
// );

// module.exports = recipeBlackList;

const mongoose = require("mongoose");

const recipeBlackList = mongoose.Schema({
  url: {
    type: String,
  },
});

module.exports = recipeBlackList;

// const mongoDB = {
//   users: [
//     {
//       userId: "",
//       firstName: "",
//       lastName: "",
//       password: "",
//       userType: 2,
//     },
//   ],
//   recipes: [
//     {
//       createdByUserId: "",
//       isInBlackList: false,
//       urlFromApi: "",
//       isDeleted: true,
//       watingToDelete: true,
//     },
//   ],
// };
