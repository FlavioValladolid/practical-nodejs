### Crear un servidor básico con Node.js

```js
var http = require('http'); // Llama a una librería de node que permite relaizar procesos de servidor, llamadas de HTTP

// Asignar el metodo createServer(), sirve para crear un servidor

http.createServer(function (request, respuesta) { // Request: información que solicita el servidor, no necesariamente se utiliza
    // Respuesta es lo que se mostrará cada vez que el usuario acceda al servidor

    // Escribir encabezado, se indica qué tipo de documento que se va a devolver
    // El código 200 indica que todo está bien
    // Se indica entre paréntesis el tipo de contenido que va a devolver, será un tipo de contenido que va a ser text/plain, es decir, que se devolverá texto plano
    respuesta.writeHead( 200, {'Content-Type': 'text/plain'});
    // Mensaje que devolverá el servidor
    respuesta.write('Hola, mundo');
    // Cerrar la respuesta
    respuesta.end();
}).listen(3000, 'localhost'); // Definir cómo va a escuchar el servidor estas condiciones, se indica que funcione en el puerto 3000, se indica que trabaje en localhost

// Enviar un mensaje para ver dentro de la consola
// Registrar mensajes en consola

console.log('El servidor se muestra en http://localhost:3000')
```

En consola ubicarse en la carpeta del archivo y colocar **node nombreArchivo.js**

Muestra el mensaje definido en el console.log

Al ir al navegador se observa el **Hola, Mundo** definido en el respuesta.write()

Para **cerrar el servidor** en consola se presiona ctrl + C