const { Schema, model } = require('mongoose');
const UsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = model('Usuario', UsuarioSchema);