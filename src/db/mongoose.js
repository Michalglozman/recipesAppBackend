const mongoose = require('mongoose');
console.log("mogo connected");
mongoose.connect(`${process.env.MONGO_PATH}`, {
    useNewUrlParser: true
});