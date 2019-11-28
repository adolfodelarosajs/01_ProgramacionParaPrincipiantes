# 06 Objetos y Clases

## Introducción a la sección
:+1:

## Explicación sobre objetos

**Objeto:** Representación abstracta de una cosa de la vida real.

Los objetos son variables que dentro de sí tienen propiedades. Básicamente un objeto nos permite agrupar una serie de propiedades que tienen una relación entre sí.

```js
let carro = {
  color: 'blanco',
  traccion: '4x4',
  llantas: 4,
  puertas: 5,
  marca:'Mitsubishi'
}

carro.color; //blanco
carro.llantas; //4
```

Para acceder a las propiedades de un objeto usamos la notación de punto.

## Ejercicio práctico sobre objetos

```js
let persona = {
  nombre: 'Salma',
  edad: 32,
  estara: 1.65
}

console.log(persona);
```
Salida:
```
Object {nombre: "Salma", edad: 32, estatura: 1.65}
  edad: 32
  estatura: 1.65
  nombre: "Salma"
  __proto__: Object
```
Para acceder a cada una de las propiedades del objeto uso la *notación de punto* 
```js
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.estatura);
```
salida
```
Salma
32
1.65
```

Vamoa a crear una función que reciba un parámetro persona y escriba una frase como esta: "Salma tiene una edad de 32 años y mide 1.65"
para crear esta frase podríamos concatenar la cadena o usar la nueva forma de crear oraciones con el backtick(`).

```js
function describirPersona(p){
  console.log(`${ p.nombre } tiene una edad de ${ p.edad } y mide ${ p.estatura }`);
}

//Objeto persona
let persona = {
  nombre: 'Salma',
  edad: 32,
  estatura: 1.65
}

describirPersona(persona);

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.estatura);
```
Salida
```
Salma tiene una edad de 32 y mide 1.65

{nombre: "Salma", edad: 32, estatura: 1.65}
  edad: 32
  estatura: 1.65
  nombre: "Salma"
  __proto__: Object

Salma
32
1.65
```

## Arreglos de objetos

```js
//Objeto persona1
let persona1 = {
  nombre: 'Salma',
  edad: 32,
  estatura: 1.65
}

//Objeto persona2
let persona2 = {
  nombre: 'Gina',
  edad: 38,
  estatura: 1.71
}

//Objeto persona3
let persona3 = {
  nombre: 'Vicky',
  edad: 39,
  estatura: 1.62
}

//Declaración del Array de personas
let personas = [persona1, persona2, persona3];

console.log(personas);
```
Salida:
```
Array(3)
  0: {nombre: "Salma", edad: 32, estatura: 1.65}
  1: {nombre: "Gina", edad: 38, estatura: 1.71}
  2: {nombre: "Vicky", edad: 39, estatura: 1.62}
  length: 3
  __proto__: Array(0)
```
Vamos a crear un ciclo for para imprimir todo nuestro array de personas y mostrar todos los datos de cada objeto:

```js
for(i=0; i<personas.length; i++){
  let persona = personas[i];
  console.log(`${persona.nombre} \t ${persona.edad} \t ${persona.estatura}`);
  //Forma directa
  //console.log(`${personas[i].nombre} \t ${personas[i].edad} \t ${personas[i].estatura}`);
}
```
Salida:
```
Salma 	 32 	 1.65
Gina 	 38 	 1.71
Vicky 	 39 	 1.62
```

## Explicación sobre las clases

**Clases:** Al igual que los objetos, las clases pueden ser representaciones abstractas de cosas de la vida real, pero sirven para crear varias instancias de una misma clase, son como moldes para hacer galletas.

Los nombres de las clases comienzan con mayúsculas. 

```js
class Galleta {}

let galletaUno = new Galleta();
let galletaDos = new Galleta();

```

Las clases también tienen propiedades como los objetos.

```
class Galleta {
  sabor
  forma
  fechaCreacion
}
```

Todas las clases tienen una función interna llamada **constructor**, cuando se crea una instancia de la clase, se ejecuta esta función. 

```
class Galleta{
  constructor(forma, sabor){
    this.forma = forma;
    this.sabor = sabor;
    this.fechaCreacion = 'HOY'
  }	
}
```
En este caso `this` hace referencia a la misma clase, lo que se esta diciendo es que la clase Galleta tiene tres propiedades (las marcadas con this) **forma**, **sabor** y **fechaCreacion** y que su valor para las dos primera es lo que se mande como parámetro para la tercera propiedad se tomará la fecha de HOY.

La anterior definición de clase Galleta será el molde para crear objetos de tipo Galleta.

Una clase además de tener propiedades también puede tener **Métodos** que son funciones relacionadas a la clase. Y cualquier variable que sea una instancia de la clase, tendrá esas funciones.

Por ejemplo, podemos tener una clase **Carro** el cual puede tener las siguientes propiedades y métodos.

Propiedades

1. Número de puertas
2. Número de llantas
3. Color
4. Marca

Métodos

1. encenderCarro()
2. apagarCarro()
3. cambiarMarcha()

Podemos instanciar esta clase para crear dos carros diferentes

```
new Carro('Seda');
new Carro('Jeep');
```

## Ejercicio práctico - Clases

JS nos permite crear Objetos sin tener una clase definina, si quisieramos tener 1000 objetos diferentes tendríamos que duplicar el código 1000 y cambiar sus valores independietes, si necesitaramos añadir una propiedad más tendríamos que hacerlo en cada uno de los 1000 objetos ya creado. Dado este problema es mejor crear un molde que represente ese objeto es decir una clase y a partir de allí generar todos los objetos necesarios, veamos el ejemplo.

```js
//Creando un objeto carro1
let carro1 = {
  marca: 'Toyota',
  tipo: 'Sedan',
  puertas: 3,
  creado: 'Hoy'
}

//Creando una clase Carro
class Carro{
  constructor(marca, tipo, puertas){
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;
    this.creado = 'Hoy'
  }
}

//Instanciando la clase Carro
let carro2 = new Carro('Mazda', 'Sedan', 2);
let carro3 = new Carro('VW', 'Sedan', 2);

console.log(carro1); 
console.log(carro2); 
console.log(carro3); 
```
Salida:
```
{marca: "Toyota", tipo: "Sedan", puertas: 3, creado: "Hoy"}
Carro {marca: "Mazda", tipo: "Sedan", puertas: 2, creado: "Hoy"}
Carro {marca: "VW", tipo: "Sedan", puertas: 2, creado: "Hoy"}
```
Observe que el primero es un objeto y los otros dos son instancia de la clase `Carro`, se parecen pero no son lo mismo. Si necesitara añadir una propiedad simplemente la agrego a la clase y todos sus instancias ya tendrían esa propiedad, en cambio con los objetos necesitaria añadirla a cada uno de ellos.

## Métodos de clase

```js
//Creando una clase Carro
class Carro{
  constructor(marca, tipo, puertas){
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;
    this.creado = 'Hoy'
    this.encendido = false;
    this.gasolina = 100;
  }
  
  //Métodos
  encenderCarro(){
    if (!this.encendido) {
      this.encendido = true;
      console.log('El carro esta encendido');
    }else {
      console.error('El carro YA está encendido, no lo puedes volver a encender.')
    }
  
    //OJO con esto, cada que se ejecuta este método imprime la 
    //instancia de Carro, para no estar haciendo un console.log aparte
    //recordar que lo que se retorne se pinta en consola.
    return this;
  }
  
  realizarViaje(consumo){
    /*
    if (!this.encendido) {
      console.log('Debes encender primero el carro.');
    }else{
      if(consumo > this.gasolina){
        console.log('La gasolina que tienes ' + this.gasolina + ' no es suficiente para realizar un viaje que consume ' + consumo);
      }else {
        this.gasolina = this.gasolina - consumo;
        console.log('Viaje realizado!!! Le queda ' + this.gasolina + '% de gasolina');
      }
    }
    */
  
    //Otra forma de escribir el código anterior es:
    if (!this.encendido) return console.log('Debes encender primero el carro.');
  
    if(consumo > this.gasolina) return console.log('La gasolina que tienes es de ' + this.gasolina + ' no es suficiente para realizar un viaje que consume ' + consumo);
  
    this.gasolina = this.gasolina - consumo;
    
    return console.log('Viaje realizado!!! Le queda ' + this.gasolina + '% de gasolina');
  }
}  
  
//Instanciando la clase Carro
let carro = new Carro('Mazda', 'Sedan', 2);

console.log(carro);
carro.encenderCarro();
console.log(carro);
carro.encenderCarro();
console.log(carro);

carro.realizarViaje(70);
carro.realizarViaje(50);
```
Salida:
```
Carro {marca: "Mazda", tipo: "Sedan", puertas: 2, creado: "Hoy", encendido: false, …}
El carro esta encendido
Carro {marca: "Mazda", tipo: "Sedan", puertas: 2, creado: "Hoy", encendido: true, …}
El carro YA está encendido, no lo puedes volver a encender.
Carro {marca: "Mazda", tipo: "Sedan", puertas: 2, creado: "Hoy", encendido: true, …}
Viaje realizado!!! Le queda 30% de gasolina
La gasolina que tienes es de 30 no es suficiente para realizar un viaje que consume 50
```

## Código fuente de la sección

:+1:
