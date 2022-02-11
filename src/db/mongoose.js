const mongoose = require('mongoose');
console.log("mogo connected"+process.env.MONGO_PATH);
mongoose.connect(`${process.env.MONGO_PATH}`, {
    useNewUrlParser: true
});