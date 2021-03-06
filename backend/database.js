const mongoose = require('mongoose');

const URI = 'mongodb://localhost/crud-prueba';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;