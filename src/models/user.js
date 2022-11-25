const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre: {type: String, require: true },
    rut: { type: String, require: true},
    correo: {type: String, require: true },
    pass: { type: String, require: true},
    perfil: {type: String, require: true }
});

// const UserSchema = new Schema({
//     name: {type: String, require: true },
//     ID: { type: int, require: true},
//     precio: {type: int, require: true },
//     costo: { type: int, require: true},
//     descricion: {type: String, require: true }
// });

module.exports = mongoose.model.Usuario || mongoose.model("Usuario", UsuarioSchema);