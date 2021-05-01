# Crear un sitio web básico con Nginx y Node.js

Node se va a encargar de convertir los elementos de JavaScript que nosotros estamos trabajando en un documento que nos va a funcionar a nivel de servidor.

Una vez que tengamos eso, vamos acrear lo que se llama una **conexión por proxy**.
- Esto va a ser básicamente una conexión indirecta, o un puenteo, que nos va a llevar idrectamente a Ngnix.

Node.js va a conectarse directamente con Ngnix y **Ngnix va a fungir aquí como un servidor**, servidor que se va a encargar de distribuir toda la información a los diferentes servidores, equipos, clients y demás elementos que ocupen nuestra información.

![img](https://i.imgur.com/Ftaw5sF.png)

### Añadir boilerplate a archivo nginx.conf

```
proxy_set_header Host $host;
proxy_set_header X-Real-Ip $remote_addr;
proxy_set_header X-Forwarded-For
$proxy_add_x_forwarded_for;
proxy_set_header X-NginX-Proxy true;

proxy_pass http://localhost:3000/; 
proxy_redirect off;
```

Este código genérico permite generar un proxy

- Toda la generación generada por Nginx se va a redirigir a Node, Nginx va a distribuir la información

Node se conecta con Nginx y Nginx se conecta con distintos clientes

`proxy_pass http://localhost:3000/; `  Esta línea es de las más importantes

- Básicamente lo que está haciendo es que está diciendo que toda la información (el tráfico) que llegue a Nginx, va a utilizar la información que viene de 'localhost', puerto 3000.
  - Esta puede ser cualqueir dirección IP o la dirección se necesite

### Versión básica de servidor en JS

```js
var http = require('http');
http.createServer(function (request, respuesta) {
    respuesta.writeHead( 200, {'Content-Type': 'text/plain'});
    respuesta.write('Lunes');
    respuesta();
}).listen(3000,'localhost');

console.log('El servidor se muestra en http://localhost:3000')
```

### Generar estructura activando los servidores

1. Activar Nginx
   1. Colocar en la terminal `nginx`	
2. Activar Node.js desde la consola
   1. Abrir la carpeta donde se encuentra el archivo de JS.
      1. `cd ubicacionArchivo`
   2. Llamar al archivo, con nodemon para refrescar automáticamente
      1. `nodemon nombreArchivo.js`
         1. nodemon se encargará ed enviar la información al puerto 3000 y va a monitorear cualquier cambio dentro del servidor

Se puede usar **Nginx** para publicar las aplicaciones con esta tecnología

En caso de sólo querer trabajar en la computadora individual se puede usar sol **nodemon**