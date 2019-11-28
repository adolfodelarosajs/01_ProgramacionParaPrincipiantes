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