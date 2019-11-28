# 07 Ejercicios de Programación - Lógica

## Introducción a la sección
:+1:

## Ejercicios

[Descripción Ejercicios](https://github.com/adolfodelarosajs/01_ProgramacionParaPrincipiantes/blob/master/Ejercicios.pdf)

## 1. Convertir de Libras a Kilogramos

```js
let libras = 160;
let kg = libras/2.2046;

kg *= 100;
kg = Math.round(kg);
kg /=100;

console.log(libras +' libras equivalen a ' + kg + ' kilogramos');
```
Salida:
```
160 libras equivalen a 72.58 kilogramos
```

## 2. Convertir de Kilómetros a millas

```js
let km = 20;
let millas = km * 0.62;

console.log(km +' km equivalen a ' + millas + ' millas');
```
Salida:
```
20 km equivalen a 12.4 millas
```

## 3. Area de un Triangulo Rectangulo

```js
let base = 10;
let altura = 5;

let area = (base*altura)/2;

console.log(' El area del triangulo rectangulo es: ' + area);
```
Salida:
```
 El area del triangulo rectangulo es: 25
```

## 4. Mayor número de un arreglo

```js
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 50];
let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
  if(numeros[i]>mayor){
    mayor = numeros[i];
  }
}

console.log("El valor mayor del arreglo es : " + mayor);
```
Salida:
```
El valor mayor del arreglo es : 50
```

## 5. Numeros Pares e Impares

```js
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 50];

for (let i = 0; i < numeros.length; i++) {
  if(numeros[i] % 2 == 0){
    console.log(numeros[i] + " es un número PAR ");
  }else{
    console.log(numeros[i] + " es un número IMPAR ");
  }
}
```
Salida:
```
1 es un número IMPAR 
6 es un número PAR 
8 es un número PAR 
4 es un número PAR 
2 es un número PAR 
7 es un número IMPAR 
10 es un número PAR 
3 es un número IMPAR 
50 es un número PAR 
```

## 6. Tablas de multiplicar

```js
for (let i = 1; i <= 5 ; i++) {
  renglon = '';
  for (let j = 1; j <= 5 ; j++) {    
    //renglon += ' ' + i*j;
    renglon += `${ j * i }   `;
  }
  console.log(renglon);
}
```
Salida:
```
1   2   3   4   5   
2   4   6   8   10   
3   6   9   12   15   
4   8   12   16   20   
5   10   15   20   25  
```

## 7. Funcion MAX

```js
function max(a, b, c){
  let mayor = a;
  if(a>=b && a>=c){
    mayor = a;
  }else if(b>=a && b>=c){
    mayor = b;
  }else{
    mayor = c;
  }

  return mayor;
}

let mayor = max(5, 2, 6);

console.log('El numero mayor es ' + mayor);
```
Salida:
```
El numero mayor es 6
```

## 8. Funcion Cadena Mas Larga

```js
function masLargo(arr){    
  let nombreLargo = '';

  for(let i = 0; i < arr.length; i++){

    if(arr[i].length > nombreLargo.length){
      nombreLargo = arr[i];
    }
  }

  return nombreLargo;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

let heroeLargo = masLargo(heroes);

console.log('Heroe con el nombre más largo: ' + heroeLargo); //Profesor Charles Xavier
```
Salida:
```
Heroe con el nombre más largo: Profesor Charles Xavier
```

## 9. Funcion para filtrar nombres

```js
function filtrarPorLetra(arr, letra){
  let nuevoArr = [];    
  for(i = 0 ; i < arr.length; i++){
    if(arr[i][0] === letra){
      nuevoArr.push(arr[i]);
    }
  }
  return nuevoArr;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman','Captain Marvel'];

let heroesCon = filtrarPorLetra(heroes, 'S');

console.log(heroesCon); 
```
Salida:
```
(2) ["She Hulk", "Spiderman"]
  0: "She Hulk"
  1: "Spiderman"
  length: 2
  __proto__: Array(0)
```
