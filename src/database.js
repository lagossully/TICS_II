const mongoose = require("mongoose");


const URI = "mongodb+srv://estamisma:esaotra@atlascluster.bv4zhk9.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URI)
    .then(db => console.log("DB ACA PApu"))
    .catch(err => console.error(err));

module.exports = mongoose;