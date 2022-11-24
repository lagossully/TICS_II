const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: {type: String, require: true },
    rut: { type: String, require: true},
    mail: {type: String, require: true },
    pass: { type: String, require: true},
    perfil: {type: String, require: true }
});

// const TaskSchema = new Schema({
//     name: {type: String, require: true },
//     ID: { type: int, require: true},
//     precio: {type: int, require: true },
//     costo: { type: int, require: true},
//     descricion: {type: String, require: true }
// });

module.exports = mongoose.model.Task || mongoose.model("Task", TaskSchema);