### Instalar nodemon
```js
var http = require('http'); 

http.createServer(function (request, respuesta) { 
    respuesta.writeHead( 200, {'Content-Type': 'text/plain'});
    respuesta.write('Martes');
    respuesta.end();

}).listen(3000, 'localhost');

console.log('El servidor se muestra en http://localhost:3000');
```

Para refrescar la página se debe reiniciar node, para esto se utiliza nodemon
- Se instala con npm
    - npm install -g nodemon
    - En mac o en linux utilizar **sudo** antes de la línea anterior

Invocará el servidor de la siguiente manera
- nodemon servidor.js

Por cada cambio se reiniciará el servidor automáticamente