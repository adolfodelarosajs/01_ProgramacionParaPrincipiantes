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

Una función también puede retornar un valor, usando la palabra `return`:

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

Salida:
`La suma de 10 + 20 = 30`

## Separando código en funciones                                                                               08:36

```js
// Función que calcula la tabla de multiplicación
function tablaMultiplicacion(base, limite) {
   console.log("Tabla del " + base);
   for (let i = 1; i <= limite; i++){
      let resultado = 2 *i;
      console.log(base + ' X ' + i + " = " + base * i);
   }
}

tablaMultiplicacion(9, 10);
tablaMultiplicacion(3, 5);
```

Salida:
```
Tabla del 9
9 X 1 = 9
9 X 2 = 18
9 X 3 = 27
9 X 4 = 36
9 X 5 = 45
9 X 6 = 54
9 X 7 = 63
9 X 8 = 72
9 X 9 = 81
9 X 10 = 90
Tabla del 3
3 X 1 = 3
3 X 2 = 6
3 X 3 = 9
3 X 4 = 12
3 X 5 = 15
```

## Tarea práctica sobre funciones                                                                              03:50

```js
/*
  Cree una función que permita determinar la calificación de un alumno en letras.
  
  Si la nota se encuentra entre 90 a 100 = A
  Si la nota se encuentra entre 80 a  89 = B
  Si la nota se encuentra entre 70 a  79 = C
  Si la nota se encuentra entre 60 a  69 = D
  Si la nota es inferior a 60 = F
*/
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
Salida:
```
La nota es 100, equivale a una A
La nota es 80, equivale a una B
La nota es 59, equivale a una F
```

## Explicación sobre los Arreglos - Arrays                                                                     02:37

Un arreglo es un conjunto de cosas similares.

**Arreglo vació**

`let flores = [];`

**Arreglo de Strings**

`let flores = ["Rosa", "Girasol", "Lirio"];`

**Extraer elementos del arreglo**
```
let primerFlor  = flores[0]; //Rosa
let segundaFlor = flores[1]; //Girasol
let ultimaFlor  = flores[2]; //Lirio
```

Los índices de un array empiezan en 0.

La propiedad **length** nos permite calcular la longitud del array de la siguiente forma: `flores.length` en este caso es 3.

## Ejercicio básico con arreglos                                                                               04:03

```js
//Array Vació
let arregloVacio = [];
console.log(arregloVacio); 

//Array con 3 elementos, el indice inicial es 0
let flores = ['Rosa', 'Girasol', 'Lirio'];

console.log(flores);

console.log(flores[0]); //Rosa
console.log(flores[1]); //Girasol
console.log(flores[2]); //Lirio
console.log(flores[3]); //undefined (Desbordamiento del array)
```
Salida
```
[]
length: 0
__proto__: Array(0)

(3) ["Rosa", "Girasol", "Lirio"]
0: "Rosa"
1: "Girasol"
2: "Lirio"
length: 3
__proto__: Array(0)

Rosa
Girasol
Lirio
undefined
```

## Ejercicio sobre arreglos #2                                                                                 04:13

```js
//Arrays
let personas = ['Rosa', 'Adolfo', 'Laura'];
let salarios = [1000, 500, 2000];

for (let i = 0; i < personas.length; i++) {
  console.log( personas[i] + " tiene un salario de " + salarios[i])	
}
```
Salida:
```
Rosa tiene un salario de 1000
Adolfo tiene un salario de 500
Laura tiene un salario de 2000
```
## Códigos fuente hasta el momento                                                                             00:06

:+1:
