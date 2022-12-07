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

router.use('/findate/:fecha', async (req, res) => {
  let value = req.params.fecha.split("h");
  // console.log(value[0].split("f").join("/")+" "+value[1])
  const agenda = await Agenda.find({fecha:value[0].split("f").join("/")+" "+value[1]});
      res.json(agenda);
})

router.use('/moddate/:id', async (req, res) => {
  let value = req.params.id
  
  const {fecha} = req.body;
  const NewDate = {fecha};
  // console.log(value[0].split("f").join("/")+" "+value[1])
  const agenda = await Agenda.findByIdAndUpdate({_id:value}, NewDate);
      res.json(agenda);
})

router.use('/moddone/:id', async (req, res) => {
  let value = req.params.id
  
  const {realizado} = req.body;
  const NewDate = {realizado};
  // console.log(value[0].split("f").join("/")+" "+value[1])
  const agenda = await Agenda.findByIdAndUpdate({_id:value}, NewDate);
      res.json(agenda);
})
module.exports = router;