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

for(i=0; i<personas.length; i++){
  let persona = personas[i];
  console.log(`${persona.nombre} \t ${persona.edad} \t ${persona.estatura}`);
  //Forma directa
  //console.log(`${personas[i].nombre} \t ${personas[i].edad} \t ${personas[i].estatura}`);
}
