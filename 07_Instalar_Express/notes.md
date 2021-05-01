# Instalar y configurar Express

Express se debe instalar en cada proyecto

### Instalar Express

En consola colocar lo siguiente:

```bash
npm install express
```

- Con **npm** se accede a los repositorios de node.

Instalará todos los archivos de express donde se abrió la consola (se requiere abrir dentro del proyecto).

Aparecerá una carpta llamada **node_modules**, dentro de esta carpeta aparecerá **express** que es el módulo instalado

### Trabajar en el programa

```js
// Importar express
var express = require('express');
// Definir la aplicación de express
var app = express();

// Manejar la ruta de express, gestionar la petición de tipo get
// Cuando se entra a la raiz del documento '/' se activará esta función
app.get('/',function (peticion,respuesta) {
    // Enviar información al usuario
    respuesta.send('Hola mundo con express');
});

// Activar la aplicación
// Funcionará en el puerto 3000
app.listen(3000,function () {
    console.log('escuchando en el puerto 3000');
});
```

### Ejecutar programa

En consola poner lo siguiente:

```bash
nodemon app.js
```

Revisar en el navegador

