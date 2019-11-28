// Crear un algoritmo, que basado en la nota imprima si el alumno aprueba la materia, aprueba con 60 ó más.
// Si el alumno tiene menos de 50 mostrar "por favor estudie más"

let nota = 55;
console.log("Nota: " + nota);

if(nota >= 60){
    console.log('El alumno aprueba la clase');
}else if(nota >=50){
    console.log('El alumno NO aprueba la clase');
}else{
    console.log('El alumno NO aprueba la clase, por favor estudie más');
}