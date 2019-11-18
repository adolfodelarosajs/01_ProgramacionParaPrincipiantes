# 05 Funciones y arreglos                                                                                      33:50
## Introducción a la sección                                                                                   01:07

:+1:

## Explicación sobre las funciones                                                                             04:26

**Función**: Una función es un conjunto de líneas de código que realizan una tarea específica y pueden retornar algo, ayudan a no repetir código.

```
function saludar(){
   .....
   .....
   .....
}
```

Las funciones pueden recibir parámetros (valores que se le envían a la función):

```
function saludar(nombre){
   .....
   .....
   .....
}
```

Una función también puede retornar un valor:

```
function sumar(a,b){
   return a + b;
}

let suma = sumar(10, 20); //Retorna 30

console.log("Suma = " + suma); //Suma = 30
```

## Ejercicio básico de funciones                                                                               04:52

```js
// Función sumar
function sumar(a, b){
   return a + b;
}

let suma = sumar(10, 20);

console.log("La suma de 10 + 20 = " + suma); //La suma de 10 + 20 = 30
```

## Separando código en funciones                                                                               08:36

```js
// Función que calcula la tabla de multiplicación
function tablaMultiplicacion(base, limite) {

   for (let i = 1; i <= limite; i++){
      let resultado = 2 *i;
      console.log(base + ' X ' + i + " = " + base * i);
   }
}

tablaMultiplicacion(9, 10);
tablaMultiplicacion(3, 10);
```

## Tarea práctica sobre funciones                                                                              03:50

```js
function calcularNota(nota) {
  if(nota >= 90) {
    notaLetra = 'A';
  } else if(nota >= 80) {
    notaLetra = 'B';
  } else if(nota >= 70) {
    notaLetra = 'C';
  } else if(nota >= 60) {
    notaLetra = 'D';
  } else {
    notaLetra = 'F';
  }
  console.log('La nota es ' + nota + ', equivale a una ' + notaLetra);
}

calcularNota(100);
calcularNota(80);
calcularNota(59);
```

## Explicación sobre los Arreglos - Arrays                                                                     02:37

Un arreglo es un conjunto de cosas similares.

**Arreglo vació**

`let flores = [];`

**Arreglo de Strings**

`let flores = ["Rosa", "Girasol", "Lirio"];`

**Extraer elementos del arreglo**

`let primerFlor = flores[0]; //Rosa`

Los índices de un array empiezan en 0.

## Ejercicio básico con arreglos                                                                               04:03

```js
let flores = ['Rosa', 'Girasol', 'Lirio'];

console.log(flores[0]); //Rosa
console.log(flores[1]); //Girasol
console.log(flores[2]); //Lirio
console.log(flores[3]); //undefined
```
## Ejercicio sobre arreglos #2                                                                                 04:13

```js
let personas = ['Rosa', 'Adolfo', 'Laura'];
let salarios = [1000, 500, 2000];

for (let i = 0; i < personas.length; i++) {
	console.log( personas[i] + " tiene un salario de " + salarios[i])	
}
```

## Códigos fuente hasta el momento                                                                             00:06

:+1:
