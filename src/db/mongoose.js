const mongoose = require("mongoose");
// const url = `${process.env.MONGO_PATH}`;
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   //useCreateIndex: true,
// });
// // mongoose.connect(`${process.env.MONGO_PATH}`, {
// //   useNewUrlParser: true,
// // });
// console.log("mongo connected");

//const { MongoClient } = require("mongodb");
const url = process.env.MONGO_PATH;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   const collection = client.db("recipe").collection("user");
//   console.log({ collection });
//   // perform actions on the collection object
//   //client.close();
// });

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@recipe.a0zn0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connections[0].db;
console.log("Connected to Mongo DB");
