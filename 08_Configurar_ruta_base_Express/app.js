// Importar paquetes de Express
var express = require('express');
// Importar fs para tener acceso al File System
var fs = require('fs');

// Crear una instancia de express
var app = express();

// Definir una ruta específica dentro de express
// Llamará a todos los procesos estáticos
// __dirname toma el nombre del directorio donde está trabajando
// Si no encuentra un archivo lo buscará a partir de la siguiente ruta
    app.use(express.static(__dirname + '/public'));

// // Trabajar con la app

// Definir una ruta
app.get('/', function (peticion, respuesta) {
    // Dar respuesta al usuario
    respuesta.sendFile('index.html'); 
});

// Definir un puerto
// Escuchar en el puerto 3000 con la variable app
app.listen(3000, function () {
    // Mandará el siguiente mensaje en consola cuando empiece a ejecutarse la aplicación
    console.log('Escuchando puerto 3000');
});