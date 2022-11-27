const { find } = require("../models/user");
const express = require('express');
const router = express.Router();
// LINK /mod/movin
// Task Model
const Servicio = require('../models/servicio');

// GET all Tasks
router.get('/', async (req, res) => {
  const servicio = await Servicio.find();
  res.json(servicio);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const servicio = await Servicio.findById(req.params.id);
  res.json(servicio);
});

// ADD a new task
router.post('/', async (req, res) => {
  const {nombre, descripcion, duracion, tarifa, insumos} = req.body;
  const servicio = new Servicio({nombre, descripcion, duracion, tarifa, insumos});
  // console.log(product)
  await servicio.save();
  res.json({status: 'Servicio Guardado'});
  });

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const {nombre, descripcion, duracion, tarifa, insumos} = req.body;
  const NewServicio = {nombre, descripcion, duracion, tarifa, insumos};
  await Servicio.findByIdAndUpdate(req.params.id, NewServicio);
  res.json({status: 'Servicio Actualizado'});
});

router.delete('/:id', async (req, res) => {
  await Servicio.findByIdAndRemove(req.params.id);
  res.json({status: 'Servicio Eliminado'});
});
module.exports = router;