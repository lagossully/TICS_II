const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    nombre: {type: String, require: true },
    rut: { type: String, require: true},
    correo: {type: String, require: true },
    perfil: {type: String, require: true }
});

module.exports = mongoose.model("Task", TaskSchema);