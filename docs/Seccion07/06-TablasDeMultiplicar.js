for (let i = 1; i <= 5 ; i++) {
    renglon = '';
    for (let j = 1; j <= 5 ; j++) {    
        //renglon += ' ' + i*j;
        renglon += `${ j * i }   `;
    }
    console.log(renglon);
}