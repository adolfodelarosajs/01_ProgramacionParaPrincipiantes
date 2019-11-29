let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 50];
let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]>mayor){
        mayor = numeros[i];
    }
}

console.log("El valor mayor del arreglo es : " + mayor);