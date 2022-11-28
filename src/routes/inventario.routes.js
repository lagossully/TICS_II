const { find } = require("../models/user");
const express = require('express');
const router = express.Router();
// LINK /mod/movin
// Task Model
const Inventario = require('../models/inventario');

// GET all Tasks
router.get('/', async (req, res) => {
  const inventario = await Inventario.find();
  res.json(inventario);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const inventario = await Inventario.findById(req.params.id);
  res.json(inventario);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { producto, cantidad, caduca, proveedor} = req.body;
  const inventario = new Inventario({producto, cantidad, caduca, proveedor});
  // console.log(product)
  await inventario.save();
  res.json({status: 'Inventario Guardado'});
  });

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const {producto, cantidad, caduca, proveedor} = req.body;
  const NewInv = { producto, cantidad, caduca, proveedor};
  await Inventario.findByIdAndUpdate(req.params.id, NewInv);
  res.json({status: 'Inventario Actualizado'});
});

router.delete('/:id', async (req, res) => {
  await Inventario.findByIdAndRemove(req.params.id);
  res.json({status: 'Inventario Eliminado'});
});
module.exports = router;