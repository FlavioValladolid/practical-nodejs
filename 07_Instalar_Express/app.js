// Importar express
var express = require('express');
// Definir la aplicación de express
var app = express();

// Manejar la ruta de express, gestionar la petición de tipo get
// Cuando se entra a la raiz del documento '/' se activará esta función
app.get('/',function (peticion,respuesta) {
    // Enviar información al usuario
    // Esto se mostrará en el navegador
    respuesta.send('Hola mundo con express');
});

// Activar la aplicación
// Funcionará en el puerto 3000
app.listen(3000,function () {
    // Esto se mostrará en la terminal
    console.log('escuchando en el puerto 3000');
});