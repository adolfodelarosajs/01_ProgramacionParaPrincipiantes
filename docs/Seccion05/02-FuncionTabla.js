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