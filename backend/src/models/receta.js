const mongoose = require('mongoose');
const {Schema} = mongoose;

const RecetaSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagenes: {type: String, required: true},
    preparacion: {type: String, required: true},
    ingredientes: {type: String, required: true},
    notas: {type: String, required: true},
});

module.exports = mongoose.model('Receta', RecetaSchema);