const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
    nombre: {type: String, require: true },
    rut: { type: String, require: true},
    correo: {type: String, require: true },
    telefono: {type: String, require: true }
});

// const UserSchema = new Schema({
//     name: {type: String, require: true },
//     ID: { type: int, require: true},
//     precio: {type: int, require: true },
//     costo: { type: int, require: true},
//     descricion: {type: String, require: true }
// });

module.exports = mongoose.model.Client || mongoose.model("Client", ClientSchema);