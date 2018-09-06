



var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose para mongodb
var port  	 = process.env.PORT || 8080; 				// definir un puerto predeterminado o el 8080
var database = require('./config/database'); 			// carga la configuracion de la base de datos
var cors = require('cors');

var morgan = require('morgan'); 		// muestra las solicitudes de registro por consola (express4)
var bodyParser = require('body-parser'); 	// extrae la informacion HTML enviada por POST (express4)
var methodOverride = require('method-override'); //  DELETE and PUT (express4)

// configuracion ===============================================================
mongoose.connect(database.url); 	// conecta con la base de datos de mongodb


app.use(cors({origin: '*'}));
app.use(express.static(__dirname + '/public/cliente/src')); 				// establece la ubicacion de los archivos basicos
app.use(morgan('dev')); 										// muestra las solicitudes por consola
app.use(bodyParser.urlencoded({'extended':'true'})); 			// analiza application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// analiza application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // convierte application/vnd.api+json a json
app.use(methodOverride());

// rutas /get/post/put/delete ======================================================================
require('./app/routes.js')(app);

// listen (inicia la aplicacion con server.js) ======================================
app.listen(port);
console.log("App iniciada en el puerto " + port);