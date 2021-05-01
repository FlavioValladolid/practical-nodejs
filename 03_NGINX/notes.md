### Instalar un servidor NGINX en Mac

**nginx:** Es un servidor de código abierto que se destaca principalmente por tener un buen rendimiento

#### Instalar Homebrew
Entrar a brew.sh

Brew nos permite installar paquetes de instalación

##### Instalar nginx
- brew install nginx
##### Abrir servidor nginx
Usar el comando **sudo** y llamar **nginx**

nginx está configurado para trabajar en el puerto 8080

#### Parar los procesos del servidor
- nginx -s stop

- Further documentation: 
    https://docs.brew.sh
- Install the Homebrew dependencies if you have sudo access:
    sudo apt-get install build-essential
    See https://docs.brew.sh/linux for more information
- We recommend that you install GCC:
    brew install gcc

