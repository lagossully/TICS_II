const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServicioSchema = new Schema({
    nombre: {type: String, require: true },
    descripcion: { type: String, require: true},
    duracion: {type: String, require: true },
    tarifa: { type: String, require: true},
    insumos: { type: String, require: true}
});
module.exports = mongoose.model.Servicio || mongoose.model("Servicio", ServicioSchema);