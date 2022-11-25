const mongoose = require("mongoose");
const { Schema } = mongoose;

const AgendaSchema = new Schema({
    usuario: { type: String, require: true},
    cliente: {type: String, require: true },
    servicio: { type: String, require: true},
    fecha: {type: String, require: true }
});

// const UserSchema = new Schema({
//     name: {type: String, require: true },
//     ID: { type: int, require: true},
//     precio: {type: int, require: true },
//     costo: { type: int, require: true},
//     descricion: {type: String, require: true }
// });

module.exports = mongoose.model.Agenda || mongoose.model("Agenda", AgendaSchema);