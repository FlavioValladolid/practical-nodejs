var express = require('express');
var app = express();

// Mandar llamar a Pug
const pug = require('pug');

// Definir carpeta base
app.use(express.static(__dirname + '/public'));

// Al entrar a la raiz se entrará a la función
app.get('/', function (peticion, respuesta) {
    // Definir el nombre de la plantilla de pug
    // La configuración de pug ya viene integrada directamente con express
    respuesta.render('index.pug');
});

// Definir en el puerto 3000
app.listen(3000, function () {
    console.log('Escuchando en el puerto 3000');
});