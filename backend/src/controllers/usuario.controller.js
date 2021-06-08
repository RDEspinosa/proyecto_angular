const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');
const usuarioController = {};

usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}
usuarioController.createUsuario = async (req, res) => {
    const { nombre, correo, password } = req.body;
    const usu = await Usuario.findOne({correo});
    if (usu) return res.status(401).send("El correo ya existe");

    const nuevoUsu = new Usuario({ nombre, correo, password });
    await nuevoUsu.save();

    const token = jwt.sign({ _id: nuevoUsu._id }, 'secretKey');
    res.status(200).json({token});
}
usuarioController.loginUsuario = async (req, res) => {
    const { correo, password } = req.body;
    const usu = await Usuario.findOne({correo});
    if (!usu) return res.status(401).send("El correo no existe");
    if (usu.password !== password) return res.status(401).send("Contraseña incorrecta");

    const token = jwt.sign({_id: usu._id}, 'secretKey');
    return res.status(200).json({token});
}
usuarioController.editUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        password: req.body.password
    }
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {$new: true});
    res.json({status: 'Usuario actualizado'});
}
usuarioController.deletUsuario = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario eliminado'});
}

module.exports = usuarioController;