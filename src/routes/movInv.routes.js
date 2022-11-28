const { find } = require("../models/user");
const express = require('express');
const router = express.Router();
// LINK /mod/product
// Task Model
const MovInv = require('../models/movInventario');

// GET all Tasks
router.get('/', async (req, res) => {
  const mov = await MovInv.find();
  res.json(mov);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const mov = await MovInv.findById(req.params.id);
  res.json(mov);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { inventario, alto_bajo, cantidad} = req.body;
  const mov = new MovInv({inventario, alto_bajo, cantidad});
  // console.log(product)
  await mov.save();
  res.json({status: 'Movimiento Guardado'});
  });

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const {inventario, alto_bajo, cantidad} = req.body;
  const NewMov = { inventario, alto_bajo, cantidad};
  await MovInv.findByIdAndUpdate(req.params.id, NewMov);
  res.json({status: 'Movimiento Actualizado'});
});

router.delete('/:id', async (req, res) => {
  await MovInv.findByIdAndRemove(req.params.id);
  res.json({status: 'Movimiento Eliminado'});
});
module.exports = router;