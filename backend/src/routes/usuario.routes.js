const { Router } = require('express');
const router = Router(); 
const usuario = require('../controllers/usuario.controller');

router.get('/', usuario.getUsuarios);
router.post('/registro', usuario.createUsuario);
router.post('/ingresar', usuario.loginUsuario);
router.put('/:id', usuario.editUsuario);
router.delete('/:id', usuario.deletUsuario);

module.exports = router;

function veryfyToken(req, res, next){
    if (!req.headers.authorization){
        return res.status(401).send('Sin autorizacion');
    }

    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null'){
        return res.status(401).send('Sin autorizacion');
    }

    const payload = jwt.verify(token, 'secretKey');
    req.userId = payload._id;
    next();
}