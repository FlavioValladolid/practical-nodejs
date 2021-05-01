# Configurar la ruta base en Express

Previamente instalar Express

### En app.js
```js
// Importar paquetes de Express
var express = require('express');
// Importar fs para tener acceso al File System
var fs = require('fs');

// Crear una instancia de express
var app = express();

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
})
```
### Ejecutar app.js con nodemon

En consola
```bash
nodemon app.js
```

Aparece el siguiente mensaje, porque no se define correctamente las rutas

```bash
TypeError: path must be absolute or specify root to res.sendFile
    at ServerResponse.sendFile ...
```

### Corregir error

Para esto se define una ruta base

```js
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
```

# En consola

Debido a **nodemon** se actualizará automáticamente, checar en el navegador

### En el navegador

Colocar lo siguiente

http://localhost:3000/tienda.html

A pesar de no estar definido dentro de la ruta de express será posible entrar a la dirección definida porque el sistema lo buscará dentro de la carpeta public

