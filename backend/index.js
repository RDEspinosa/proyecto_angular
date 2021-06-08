const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/receta',require('./src/routes/receta.routes'));
app.use('/api/usuario',require('./src/routes/usuario.routes'));

// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server en puerto ', app.get('port'));
});