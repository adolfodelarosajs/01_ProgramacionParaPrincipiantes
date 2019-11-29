// Determinar día de la semana de acuerdo a la siguiente relación: 0=domingo, 1=lunes, 2=martes...6=sabado
let dia = 5; 

switch ( dia ){
  case 0:
      console.log('El día ' + dia +  ' es domingo');
      break;
  case 1:
      console.log('El día ' + dia + ' es lunes');
      break;
  case 2:
      console.log('El día ' + dia + ' es martes');
      break;
  case 3:
      console.log('El día ' + dia + ' es miércoles');
      break;
  case 4:
      console.log('El día ' + dia + ' es jueves');
      break;
  case 5:
      console.log('El día ' + dia + ' es viernes');
      break;
  case 6:
      console.log('El día ' + dia + ' es sabado');
  default:
        console.log('El día ' + dia + ' es indeterminado....');
}