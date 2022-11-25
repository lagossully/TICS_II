// const { find } = require("../models/user");
const express = require('express');
const router = express.Router();
// LINK /mod/agenda
// Task Model
const Agenda = require('../models/agenda');

// GET all Tasks
router.get('/', async (req, res) => {
  const agenda = await Agenda.find();
  res.json(agenda);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const agenda = await Agenda.findById(req.params.id);
  res.json(agenda);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { usuario, cliente, servicio, fecha} = req.body;
  const agenda = new Agenda({usuario, cliente, servicio, fecha});
  // console.log(product)
  await agenda.save();
  res.json({status: 'Agenda Guardado'});
  });

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const {usuario, cliente, servicio, fecha} = req.body;
  const NewInv = {usuario, cliente, servicio, fecha};
  await Agenda.findByIdAndUpdate(req.params.id, NewInv);
  res.json({status: 'Agenda Actualizado'});
});

router.delete('/:id', async (req, res) => {
  await Agenda.findByIdAndRemove(req.params.id);
  res.json({status: 'Agenda Eliminada'});
});
module.exports = router;