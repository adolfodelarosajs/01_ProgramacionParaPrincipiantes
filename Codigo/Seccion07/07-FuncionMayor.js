function max(a, b, c){
    let mayor = a;
    if(a>=b && a>=c){
        mayor = a;
    }else if(b>=a && b>=c){
        mayor = b;
    }else{
        mayor = c;
    }

    return mayor;
}

let mayor = max(5, 2, 6);

console.log('El numero mayor es ' + mayor);