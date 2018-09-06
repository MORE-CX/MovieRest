var Pelicula = require('./models/pelicula');
var key = "67f4da3fd50b5f030400d2f3527b608e";

module.exports = function (app) {

    // get-> Obtiene todas la peliculas
    app.get('/api/peliculas/:key', function (req, res) {
        // usa mongoose para traer todas las peliculas de la base de datos 

        if (req.params.key == key) {
            Pelicula.find(function (err, peliculas) {
                // En caso de error este es enviado
                if (err)
                    res.send(err)

                res.json(peliculas); // retorna todas las peliculas en formato JSON
            });
        } else {
            res.send("Key no valida")
        }
    });

    app.get('/api/peliculas/detalles/:key&:id', function (req, res) {
        // usa mongoose para traer todas las peliculas de la base de datos 

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




    app.get('/api/peliculas/genero/:key&:genero', function (req, res) {
        // usa mongoose para traer todas las peliculas de la base de datos 

        if (req.params.key == key) {

            Pelicula.find(function (err, peliculas) {

                if (err)
                    res.send(err)
                peliDeGenero = [];

                if (req.params.genero.toLowerCase() == "todo") {



                    peliDeGenero = peliculas; // retorna todas las peliculas en formato JSON



                } else {
                    for (let i = 0; i < peliculas.length; i++) {
                        string = (peliculas[i].generos).toLowerCase();
                        string = string.replace(/á/gi, "a");
                        string = string.replace(/é/gi, "e");
                        string = string.replace(/í/gi, "i");
                        string = string.replace(/ó/gi, "o");
                        string = string.replace(/ú/gi, "u");
                        string = string.replace(/ñ/gi, "n");

                        console.log("Esto", string);
                        if ((string).search(req.params.genero.toLowerCase()) != -1)
                            peliDeGenero.push(peliculas[i]);
                    }
                }
                res.json(peliDeGenero); // retorna todas las peliculas de tal genero en formato JSON
            });



        } else {
            res.send("Key no valida")
        }
    });




    app.get('/api/peliculas/buscar/:key&:titulo', function (req, res) {
        // usa mongoose para traer todas las peliculas de la base de datos 

        if (req.params.key == key) {

            Pelicula.find(function (err, peliculas) {

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
                res.json(peliLLamada); // retorna todas las peliculas de tal genero en formato JSON
            });



        } else {
            res.send("Key no valida")
        }
    });











    // create una peicula y la retorna luego de eso
    app.post('/api/peliculas/:key', function (req, res) {

        // crea una pelicula con la informacion proveniente de la solicitud AJAX de Angular
        if (req.params.key == key) {
            Pelicula.create({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                portada: req.body.portada,
                trailer: req.body.trailer,
                estreno: req.body.estreno,
                generos: req.body.generos
            }, function (err, todo) {
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

    // delete a una pelicula
    app.delete('/api/peliculas/:key&:id', function (req, res) {
        if (req.params.key == key) {
            Pelicula.remove({
                _id: req.params.id
            }, function (err, todo) {
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


    // put una pelicula
    app.put('/api/peliculas/:key&:id', function (req, res, next) {
        if (req.params.key == key) {
            Pelicula.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
                Pelicula.findOne().then(function (pelicula) {
                    res.send(pelicula);
                });

            });
        } else {
            res.send("Key no valida")
        }
    });








    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendfile('./public/cliente/src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};