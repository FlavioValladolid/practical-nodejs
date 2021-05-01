### das

### Invocar un servidor básico con todas las bibliotecas de http

Las bibliotecas de http permiten gestionar todos los que son "requests" o peticiones de http a través del servidor

Se utiliza el método *createServer* para crear el servidor y se utiliza el puerto 3000 dentro de localhost

```js
var http = require('http');

http.createServer(function (peticion, respuesta) {

}).listen(3000,'localhost');
```

**petición** brinda la información de lo que solicita el usuario del servidor

- Brinda información del usuario y otra información relacionada con la petición.

**respuesta** es el resultado de la información que se le va a devolver al usuario

### Saber la información que está pidiendo el usuario

Con URL se tiene específicamente el enlace que está pidiendo el usuario

Con switch se eligirá la respuesta de acuerdo a lo que pida el usuario

```js
var http = require('http');

http.createServer(function (peticion, respuesta) {
    
    // Escribir los encabezados o headers del documento
    // El código 200 indica que todo está funcionando bien
    // El tipo de contenido será texto html
    respuesta.writeHead(200, {'Content-Type': 'text/html'}); 

    switch (peticion.url) {
        case '/': // En caso de que la url sea la raíz del documento
            plantilla = 'inicio.html';
            break;
        case '/nodejs':
            plantilla = 'sobrenode.html';

        default: // En caso de que la ruta no sea raíz ni nodejs
            plantilla = '404.html';
            break;
    }

}).listen(3000,'localhost');
```

### Acceder a los archivos del sistema con fs

```js
var http = require('http'); // Permite gestionar los request o peticiones de http
var fs = require('fs'); // Permite acceder a los archivos del sistema

http.createServer(function (peticion, respuesta) {
    
    // Escribir los encabezados o headers del documento
    // El código 200 indica que todo está funcionando bien
    // El tipo de contenido será texto html
    respuesta.writeHead(200, {'Content-Type': 'text/html'}); 

    switch (peticion.url) {
        case '/': // En caso de que la url sea la raíz del documento
            plantilla = 'inicio.html';
            break;
        case '/nodejs':
            plantilla = 'sobrenode.html';
			break;
        default: // En caso de que la ruta no sea raíz ni nodejs
            plantilla = '404.html';
            break;
    }

}).listen(3000,'localhost');

fs.readFile('./plantillas/' + plantilla, function (error, datos) { 
    respuesta.write(datos); // Imprimir datos
    respuesta.end();
});
    
// Solicitar leer un archivo del sistema
// Función para manejar la respuesta o un error posible
```

Invocar en terminal con `nodemon nombreArchivo.js`