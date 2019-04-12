var Pelicula = require('./models/pelicula');
var key = "67f4da3fd50b5f030400d2f3527b608e";
var multer = require('multer')





//Configuracion para subir archivos al servidor
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/dist/cliente/imagenes/portadas");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
var upload = multer({ storage: storage })



module.exports = function (app) {









    //Obtiene todas la peliculas y las retorna en formato JSON
    app.get('/api/peliculas/:key', function (req, res) {
        if (req.params.key == key) {
            Pelicula.find(function (err, peliculas) {
                // En caso de error este es enviado
                if (err)
                    res.send(err)

                res.json(peliculas);
            });
        } else {
            res.send("Key no valida")
        }
    });






    // trae una pelicula especifica segun el id pasado y es retornada en formato JSON
    app.get('/api/peliculas/detalles/:key&:id', function (req, res) {
        if (req.params.key == key) {
            Pelicula.findById({ _id: req.params.id }, (err, peliculas) => {
                // En caso de error este es enviado
                if (err)
                    res.send(err)
                res.json(peliculas);
            });
        } else {
            res.send("Key no valida")
        }
    });






    // retorna las peliculas de un genero solicitado 
    app.get('/api/peliculas/genero/:key&:genero', function (req, res) {
        if (req.params.key == key) {
            Pelicula.find(function (err, peliculas) {
                // En caso de error este es enviado
                if (err)
                    res.send(err)
                peliDeGenero = [];
                if (req.params.genero.toLowerCase() == "todo") {
                    peliDeGenero = peliculas;
                } else {
                    for (let i = 0; i < peliculas.length; i++) {
                        string = (peliculas[i].generos).toLowerCase();
                        string = string.replace(/á/gi, "a");
                        string = string.replace(/é/gi, "e");
                        string = string.replace(/í/gi, "i");
                        string = string.replace(/ó/gi, "o");
                        string = string.replace(/ú/gi, "u");
                        string = string.replace(/ñ/gi, "n");
                        if ((string).search(req.params.genero.toLowerCase()) != -1)
                            peliDeGenero.push(peliculas[i]);
                    }
                }
                res.json(peliDeGenero);
            });
        } else {
            res.send("Key no valida")
        }
    });





    // retorna todas las peliculas que tengan ese string en su titulo en formato JSON
    app.get('/api/peliculas/buscar/:key&:titulo', function (req, res) {
        if (req.params.key == key) {
            Pelicula.find(function (err, peliculas) {
                // En caso de error este es enviado
                if (err)
                    res.send(err)
                peliLLamada = [];
                for (let i = 0; i < peliculas.length; i++) {
                    string = (peliculas[i].titulo).toLowerCase();
                    string = string.replace(/á/gi, "a");
                    string = string.replace(/é/gi, "e");
                    string = string.replace(/í/gi, "i");
                    string = string.replace(/ó/gi, "o");
                    string = string.replace(/ú/gi, "u");
                    string = string.replace(/ñ/gi, "n");
                    if ((string).search(req.params.titulo.toLowerCase()) != -1)
                        peliLLamada.push(peliculas[i]);
                }
                res.json(peliLLamada);
            });
        } else {
            res.send("Key no valida")
        }
    });






    // crea una peicula y la retorna luego de eso
    app.post('/api/peliculas/:key', upload.single('portada'), function (req, res) {
        // crea una pelicula con la informacion pasada
        if (req.params.key == key) {
            Pelicula.create({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                portada: req.body.portada,
                trailer: req.body.trailer,
                estreno: req.body.estreno,
                generos: req.body.generos
            }, function (err, todo) {
                // En caso de error este es enviado
                if (err)
                    res.send(err);
                // obtiene y retorna las peliculas 
                Pelicula.find(function (err, todos) {
                    if (err)
                        res.send(err)
                    res.json(todos);
                });
            });
        } else {
            res.send("Key no valida")
        }
    });





    //Sube una imagen de portada al servidor
    app.post('/api/subirportada/:key', upload.single('portada'), function (req, res) {
        if (req.params.key == key) {
            res.json(req.file.originalname);
        } else {
            res.send("Key no valida")
        }
    });






    // Elimina una pelicula
    app.delete('/api/peliculas/:key&:id', function (req, res) {
        if (req.params.key == key) {
            Pelicula.remove({
                _id: req.params.id
            }, function (err, todo) {
                // En caso de error este es enviado
                if (err)
                    res.send(err);

                Pelicula.find(function (err, todos) {
                    if (err)
                        res.send(err)
                    res.json(todos);
                });
            });
        } else {
            res.send("Key no valida")
        }
    });






    // Actualiza una pelicula
    app.put('/api/peliculas/:key', function (req, res, next) {
        if (req.params.key == key) {
            Pelicula.findByIdAndUpdate({ _id: req.body._id }, req.body).then(function () {
                Pelicula.findOne().then(function (pelicula) {
                    res.send(pelicula);
                });

            });
        } else {
            res.send("Key no valida")
        }
    });






    //Carga el archivo de vista única (angular manejará los cambios de página en el front-end)
    app.get('*', function (req, res) {
        res.sendfile('./public/dist/cliente/index.html');
    });
};