// const { find } = require("../models/user");
const express = require('express');
const router = express.Router();
// LINK /mod/client"
// Task Model
const Cliente = require('../models/client');

// GET all Tasks
router.get('/', async (req, res) => {
  const cliente = await Cliente.find();
  res.json(cliente);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  res.json(cliente);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { nombre, rut, correo, telefono} = req.body;
  const cliente = new Cliente({ nombre, rut, correo, telefono});
  // console.log(product)
  await cliente.save();
  res.json({status: 'Cliente Guardado'});
  });

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { nombre, rut, correo, telefono} = req.body;
  const NewInv = { nombre, rut, correo, telefono};
  await Cliente.findByIdAndUpdate(req.params.id, NewInv);
  res.json({status: 'Cliente Actualizado'});
});

router.delete('/:id', async (req, res) => {
  await Cliente.findByIdAndRemove(req.params.id);
  res.json({status: 'Cliente Eliminado'});
});
module.exports = router;