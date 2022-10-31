const express = require("express");
const morgan = require("morgan");
const app = express ();
const path = require("path");

const { mongoose } = require("./database");

//configuracion
app.set("port", process.env.PORT || 3000);

//middleware
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/this", require("./routes/task.routes"));
//static files
// console.log(path.join(__dirname, "public"))
app.use(express.static(path.join(__dirname, "public")))

//starting server
app.listen(app.get("port"), () => {
    console.log("servidor en "+ app.get("port"));
});



//mongodb+srv://estamisma:<password>@atlascluster.bv4zhk9.mongodb.net/?retryWrites=true&w=majority