/*
  Cree un programa que permita determinar 
  la calificación de un alumno en letras.
  
  Si la nota se encuentra entre 90 a 100 = A
  Si la nota se encuentra entre 80 a  89 = B
  Si la nota se encuentra entre 70 a  79 = C
  Si la nota se encuentra entre 60 a  69 = D
  Si la nota es inferior a 60 = F

*/

let nota = 90;
let notaLetra = '';

if(nota >= 90 && nota <= 100) {
  notaLetra = 'A';
} else if(nota >= 80 && nota <= 89) {
  notaLetra = 'B';
} else if(nota >= 70 && nota <= 79) {
  notaLetra = 'C';
} else if(nota >= 60 && nota <= 69) {
  notaLetra = 'D';
} else {
  notaLetra = 'F';
}

console.log('La nota es ' + nota + ', equivale a una ' + notaLetra);

// Otra forma más reducida es, usando solo el límite inferior
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