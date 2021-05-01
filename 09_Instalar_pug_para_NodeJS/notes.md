# Instalación de Pug para Node.js

Pug es un sistema que nos va a permitir desplegar información dinámica a través de plantillas.
- Pug antiguamente era conocido como Jade, y recientemente cambiaron de nombre.

### Instalar dentro del proyecto

Dentro de la terminal donde se encuentra el proyecto colocar

```bash	
npm install pug
```

### En app.js

```js
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
```

### Incializar con nodemon

```bash
nodemon app.js
```

En caso de tener conflicto de nombres (dos archivos de nombre index [ejem. index.html y index.pug]), la configuración por defecto mostrará el archivo HTML

