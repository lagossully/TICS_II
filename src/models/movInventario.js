const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovInvSchema = new Schema({
    inventario: {type: String, require: true },
    alto_bajo: { type: String, require: true},
    cantidad: {type: String, require: true }
    // proveedor: { type: String, require: true}
});

module.exports = mongoose.model.MovInv || mongoose.model("MovInv", MovInvSchema);