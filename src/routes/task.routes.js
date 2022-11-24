const { find } = require("../models/task");
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

// Task Model
const Task = require('../models/task');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { name, rut, mail, pass, perfil } = req.body;
  bcrypt
    .hash(pass, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const task = new Task({
        name: name,
        rut: rut,
        mail: mail,
        pass: hashedPassword,
        perfil: perfil
      });
      task
        .save()
    // const { name, rut, mail, pass, perfil } = req.body;
    // const task = new Task({name, rut, mail, pass, perfil});
    // console.log(task)
    // await task.save();
    res.json({status: 'Task Saved'});
  });
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { name, rut, mail, pass, perfil } = req.body;
  const newTask = {name, rut, mail, pass, perfil};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});
module.exports = router;