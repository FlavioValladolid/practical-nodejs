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
            console.log('nodejs')
            break;
        default: // En caso de que la ruta no sea raíz ni nodejs
            plantilla = '404.html';
            break;
    }

    fs.readFile('./plantillas/' + plantilla, function (error, datos) { 
        respuesta.write(datos); // Imprimir datos
        respuesta.end();
    });
}).listen(3000,'localhost');

    
// Solicitar leer un archivo del sistema
// Función para manejar la respuesta o un error posible
