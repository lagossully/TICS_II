const router = require("express").Router();
// const { User } = require("../models/user");
const Usuario = require('../models/user');
// const Usuario = require('../models/user');
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

router.get("/login", (req, res) => {
    res.send("GET Login");
  });
  router.post("/login", async (req, res) => {
    //validation
    if (!req.body.correo || !req.body.pass) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const user = await Usuario.findOne({ correo: req.body.correo });
    if (!user) {
      return res.status(400).json({ msg: "User doesnt exist" });
    }
  
    bcrypt.compare(req.body.pass, user.pass, function (err, response) {
      if (!response) {
        return res.status(400).send({ msg: "Authentication Error" });
      } else {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.json({
          token: token,
          user: {
            id: user._id,
            correo: user.correo,
          },
        });
      }
    });
  });
  router.post("/tokenIsValid", async (req, res) => {
    try {
      const token = req.header("auth-token");
      if (!token) {
        return res.json("false");
      }
  
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if (!verified) {
        return res.json("false");
      }
  
      const user = await Usuario.findById(verified._id);
      if (!user) {
        return res.json("false");
      }
  
      return res.json(true);
    } catch {
      res.status(500).json({ msg: err.message });
    }
  });

module.exports = router;