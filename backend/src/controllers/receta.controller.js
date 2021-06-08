const Receta = require('../models/receta');
const recetaController = {};

recetaController.getRecetas = async (req, res) => {
    const recetas = await Receta.find();
    res.json(recetas);
}
recetaController.createReceta = async (req, res) => {
    const receta = Receta(req.body);
    await receta.save();
    res.json({
        'status': 'Receta guardada'
    });
}
recetaController.getReceta = async (req, res) => {
    const receta = await Receta.findById(req.params.id);
    res.json(receta);
}
recetaController.editReceta = async (req, res) => {
    const { id } = req.params;
    const receta = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        imagenes: req.body.imagenes,
        preparacion: req.body.preparacion,
        ingredientes: req.body.ingredientes,
        notas: req.body.notas,
    }
    await Receta.findByIdAndUpdate(id, {$set: receta}, {$new: true});
    res.json({status: 'Receta actualizada'});
}
recetaController.deletReceta = async (req, res) => {
    await Receta.findByIdAndRemove(req.params.id);
    res.json({status: 'Receta eliminada'});
}

module.exports = recetaController;