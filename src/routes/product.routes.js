const { find } = require("../models/user");
const express = require('express');
const router = express.Router();
// LINK /mod/product
// Task Model
const Producto = require('../models/product');

// GET all Tasks
router.get('/', async (req, res) => {
  const product = await Producto.find();
  res.json(product);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const product = await Producto.findById(req.params.id);
  res.json(product);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { nombre, descripcion, precio, costo} = req.body;
  const product = new Producto({nombre, descripcion, precio, costo});
  // console.log(product)
  await product.save();
  res.json({status: 'Producto Guardado'});
  });

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { nombre, descripcion, precio, costo} = req.body;
  const newProduct = { nombre, descripcion, precio, costo};
  await Producto.findByIdAndUpdate(req.params.id, newProduct);
  res.json({status: 'Producto Actualizado'});
});

router.delete('/:id', async (req, res) => {
  await Producto.findByIdAndRemove(req.params.id);
  res.json({status: 'Producto Eliminado'});
});
module.exports = router;