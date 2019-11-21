# 03 Primeros pasos en lógica y corriendo nuestro primer programa                                              37:09

## Introducción a la sección                                                                                   02:09

:+1:

## Lógica para resolver problemas                                                                              05:32

**Problema**: Tenemos el número 10 y deseamos tener un 20. Las soluciones son infinitas. Siempre hay diferentes formas de resolver un mismo problema:
* 10 + 10 = 20
* 10 + 30 = 40 / 2 = 20
* 10 * 2 = 20
* 10 - 50 + 60 = 20
* etc.

Pero siempre esta en juego cual es más eficiente.

**Algoritmo**: Es un proceso ordenado y secuencial para resolver un problema.

**Variable**: Es el espacio en memoria donde podemos almacenar datos, estos datos pueden cambiar en el futuro.

### Declaración de una variable en JS

Para declarar una variable usamos la palabra reservada **let**:
```js
let a = 10;
```

Para resolver el problema planteado inicialmente podemos escribir el siguiente programa en JS:

```js
let a = 10;
a = a + 10; //El valor de a es 20
console.log( a );
```

## Instalaciones necesarias para seguir el curso                                                               04:08

* Instalar [Google Chrome](https://www.google.com/intl/es_es/chrome/)

* Instalar [Visual Studio Code](https://code.visualstudio.com/)

* Instalar [Node](https://nodejs.org/es/)

   Comprobar versión:

   `node --version`
   
   `12.4.0`

* Instalar [TypeScript](https://www.typescriptlang.org/)

   `npm install -g typescript`
   
   Comprobar versión:

   `tsc --version`
   
   `3.4.5`

## Ejecutando nuestro primer programa                                                                          03:45

Abrir **Google Chrome** y presionar **F12** para abrir las **Herramientas del Desarrollador**.

### Primera forma de ejecutar código JS usando la CONSOLA.

Ir a la pestaña **Console** y escribir el siguiente código:

```js
> let a = 10;
< undefined
> a
< 10
> a = a + 10;
< 20
> console.log(a);
20
< undefined
```

NOTA: Cuando yo no inicializo el valor de una variable JS le asigna **undefined**. La ejecucion de varias instrucciones retornan como resultado **undefined** por eso se muestra al ejecutar algunas instrucciones.

La consola nos permite introducir código JS mientras vamos viendo lo que nos responde.

## Hola Mundo en JavaScript                                                                                    06:47

Usando VSC, vamos a crear la carpeta **Seccion03** y dentro el archivo **01-HolaMundo.js**, con el siguiente contenido:

`console.log('Hola Mundo!');`

Ya tenemos nuestro archivo JS, para ejecutarlo existen varias formas, en este caso lo ejecutaremos en la TERMINAL.

### Segunda forma de ejecutar código JS usando el TERMINAL

Usando el TERMINAL de VSC, Git Bash o el símbolo de sistema de Windows y estando dentro de la carpeta **Seccion03** ejecutamos el comando:

```
> node 01-HolaMundo
Hola Mundo!
```

Obsérvese que no es necesario poner la extensión **.js**

Nos aparece en la consola el mensaje que codificamos. Si tuviéramos un error se mostrara en la consola para que lo solucionemos.
 
## Ejecutar nuestro hola mundo en una página web                                                               05:42

En nuestra carpeta **Seccion03** vamos a crear el archivo **index.html** con el siguiente código:

```html
<html>
    <head>

    </head>
    <body>
        <h1>Hola Mundo!</h1>
    </body>
</html>
```

Y abrimos el archivo **index.html** con **Google Chrome**, vemos nuestro mensaje en el navegador.

### Tercera forma de ejecutar código JS

Si también quisiera ver el mensaje en la consola del navegador tengo que hacer que se ejecute el js desde mi html y esto lo hago así:

```html
<html>
    <head>

    </head>
    <body>
        <h1>Hola Mundo!</h1>
        <h1>Mostrar Hola Mundo! en la consola.</h1>
        <p>Abra la consola para ver el resultado (F12)</p>
        <script src="01-HolaMundo.js"></script>
    </body>
</html>
```

Salida:

`Hola Mundo!`

## Problema: Convertir de grados Fahrenheit a Celsius                                                          04:01

La fórmula para hacer la conversión es la siguiente:

	C = ( F - 32 ) * ( 5 / 9 )

## Tarea y resolución de la conversión                                                                         05:05

Crear archivos **FahrenheitCelsius.html** y **FahrenheitCelsius.js** para resolver el problema.

**FahrenheitCelsius.html**

```html
<html>
    <head>

    </head>
    <body>
        <h1>Convertir 90 grados Fahrenheit a Celsius</h1>
        <p>La fórmula para hacer la conversión es la siguiente:</p>
        <p>C = ( F - 32 ) * ( 5 / 9 )</p>
        <p>Abra la consola para ver el resultado (F12)</p>
        <script src="02-FahrenheitCelsius.js"></script>
    </body>
</html>
```

**FahrenheitCelsius.js**

```js
/*
Convertir de grados Fahrenheit a Celsius
La formula para hacer la conversión es la siguiente:
    C = ( F - 32 ) * ( 5 / 9 )   
*/

let celcius;
let fahrenheit = 90;

celcius = (fahrenheit - 32 ) * ( 5 / 9);

console.log(fahrenheit + " grados fahrenheit equivalen a " + celcius + " grados celcius.");

```

Salida:

`90 grados fahrenheit equivalen a 32.22222222222222 grados celcius.`
