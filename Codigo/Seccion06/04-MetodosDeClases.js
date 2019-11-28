//Creando una clase Carro
class Carro{
  constructor(marca, tipo, puertas){
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;
    this.creado = 'Hoy'
    this.encendido = false;
    this.gasolina = 100;
  }
  
  //Métodos
  encenderCarro(){
    if (!this.encendido) {
      this.encendido = true;
      console.log('El carro esta encendido');
    }else {
      console.error('El carro YA está encendido, no lo puedes volver a encender.')
    }
  
    //OJO con esto, cada que se ejecuta este método imprime la 
    //instancia de Carro, para no estar haciendo un console.log aparte
    //recordar que lo que se retorne se pinta en consola.
    return this;
  }
  
  realizarViaje(consumo){
    /*
    if (!this.encendido) {
      console.log('Debes encender primero el carro.');
    }else{
      if(consumo > this.gasolina){
        console.log('La gasolina que tienes ' + this.gasolina + ' no es suficiente para realizar un viaje que consume ' + consumo);
      }else {
        this.gasolina = this.gasolina - consumo;
        console.log('Viaje realizado!!! Le queda ' + this.gasolina + '% de gasolina');
      }
    }
    */
  
    //Otra forma de escribir el código anterior es:
    if (!this.encendido) return console.log('Debes encender primero el carro.');
  
    if(consumo > this.gasolina) return console.log('La gasolina que tienes es de ' + this.gasolina + ' no es suficiente para realizar un viaje que consume ' + consumo);
  
    this.gasolina = this.gasolina - consumo;
    
    return console.log('Viaje realizado!!! Le queda ' + this.gasolina + '% de gasolina');
  }
}  
  
//Instanciando la clase Carro
let carro = new Carro('Mazda', 'Sedan', 2);

carro.realizarViaje(70);
console.log(carro);
carro.encenderCarro();
console.log(carro);
carro.encenderCarro();
console.log(carro);

carro.realizarViaje(70);
carro.realizarViaje(50);