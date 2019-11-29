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