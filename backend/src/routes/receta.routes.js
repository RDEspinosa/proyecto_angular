const express = require('express');
const router = express.Router(); 
const receta = require('../controllers/receta.controller');

router.get('/', receta.getRecetas);
router.post('/', receta.createReceta);
router.get('/:id', receta.getReceta);
router.put('/:id', receta.editReceta);
router.delete('/:id', receta.deletReceta);

module.exports = router;