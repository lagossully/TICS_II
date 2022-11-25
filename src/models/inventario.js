const mongoose = require("mongoose");
const { Schema } = mongoose;

const InventarioSchema = new Schema({
    producto: {type: String, require: true },
    cantidad: { type: String, require: true},
    caduca: {type: String, require: true }
});

module.exports = mongoose.model.Inventario || mongoose.model("Inventario", InventarioSchema);