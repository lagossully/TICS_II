const express = require("express");
const morgan = require("morgan");
const app = express ();
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Usuario = require("./models/user");
const { mongoose } = require("./database");

//configuracion
app.set("port", process.env.PORT || 3000);

//middleware
app.use(morgan("dev"));
app.use(express.json());




//routes
app.use("/mod/user", require("./routes/user.routes"));
app.use("/mod/product", require("./routes/product.routes"));
app.use("/mod/movin", require("./routes/movInv.routes"));
app.use("/mod/inven", require("./routes/inventario.routes"));
app.use("/mod/client", require("./routes/cliente.routes"));
app.use("/mod/agenda", require("./routes/agenda.routes"));


//static files
// console.log(path.join(__dirname, "public"))
app.use(express.static(path.join(__dirname, "public")))

//starting server
app.listen(app.get("port"), () => {
    console.log("servidor en "+ app.get("port"));
});

// login endpoint
app.post("/app/login", (request, response) => {
    // check if email exists
    // console.log("aca",request.body.mail)
      Usuario.findOne({correo:request.body.correo})
      // if email exists
        .then((user) => {
          // compare the password entered and the hashed password found
          bcrypt
            .compare(request.body.pass, user.pass)
    
            // if the passwords match
            .then((passwordCheck) => {
    
              // check if password matches
              if(!passwordCheck) {
                return response.status(400).send({
                  message: "Passwords does not match",
                  error,
                });
              }
    
              //   return success response
              response.status(200).send({
                message: "Login Successful",
                correo: user.correo,
                // token,
              });
            })
            // catch error if password does not match
            .catch((error) => {
              response.status(400).send({
                message: "Passwords does not match",
                error,
              });
            });
        })
      // catch error if email does not exist
        .catch((e) => {
          response.status(404).send({
            message: "Email not found",
            e,
          });
        });
  });



  app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));                               
  });
//mongodb+srv://estamisma:<password>@atlascluster.bv4zhk9.mongodb.net/?retryWrites=true&w=majority