const { find } = require("../models/user");
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

// Task Model
const Usuario = require('../models/user');

// GET all Tasks
router.get('/', async (req, res) => {
  const user = await Usuario.find();
  res.json(user);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const user = await Usuario.findById(req.params.id);
  res.json(user);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { nombre, rut, correo, pass, perfil, horario } = req.body;
  bcrypt
    .hash(pass, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new Usuario({
        nombre: nombre,
        rut: rut,
        correo: correo,
        pass: hashedPassword,
        perfil: perfil,
        horario: horario
      });
      user
        .save()
    // const { name, rut, mail, pass, perfil } = req.body;
    // const task = new Task({name, rut, mail, pass, perfil});
    // console.log(task)
    // await task.save();
    res.json({status: 'Usuario Guardado'});
  });
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { nombre, rut, correo, pass, perfil, horario } = req.body;
  // bcrypt
  //   .hash(pass, 10)
  //   .then((hashedPassword) => {
  //     const user = {
  //       nombre: nombre,
  //       rut: rut,
  //       correo: correo,
  //       pass: hashedPassword,
  //       perfil: perfil}
  //     Usuario.findByIdAndUpdate({_id:req.params.id}, {$set:user},
  //       {new:true})
  //       console.log(req.params.id, user)
  //     res.json({status: 'Usuario Actualizado'});
  //   });
  const newUser = {nombre, rut, correo, pass, perfil, horario};
  await Usuario.findByIdAndUpdate(req.params.id, newUser);
  res.json({status: 'Usuario Actualizado'});
});

router.delete('/:id', async (req, res) => {
  console.log(req.params.id)
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({status: 'Usuario Eliminado'});
});
module.exports = router;