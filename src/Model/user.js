// const mongoose = require("mongoose");

// const userData = mongoose.model(
//   "user",
//   {
//     userId: {
//       type: String,
//     },
//     firstName: {
//       type: String,
//     },
//     lastName: {
//       type: String,
//     },
//     password: {
//       type: String,
//     },
//     userType: {
//       type: Number,
//     },
//   },
//   "user"
// );

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  userType: {
    type: Number,
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
