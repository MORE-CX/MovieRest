var mongoose = require('mongoose');
//Modelo de la base de datos
module.exports = mongoose.model('Pelicula', {
      titulo: String,
      descripcion: String,
      portada: String,
      trailer: String,
      estreno: String,
      generos: String
});