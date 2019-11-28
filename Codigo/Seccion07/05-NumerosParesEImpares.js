let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 50];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 0){
        console.log(numeros[i] + " es un número PAR ");
    }else{
        console.log(numeros[i] + " es un número IMPAR ");
    }
}