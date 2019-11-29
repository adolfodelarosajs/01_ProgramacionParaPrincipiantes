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