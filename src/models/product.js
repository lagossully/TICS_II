const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: {type: String, require: true },
    descripcion: { type: String, require: true},
    precio: {type: String, require: true },
    costo: { type: String, require: true}
});
module.exports = mongoose.model.Producto || mongoose.model("Producto", ProductoSchema);