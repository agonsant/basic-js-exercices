/**
Crear una función “elegirOpcion” que dado un número, devuelva un texto dependiendo del valor de ese número.
1 -> “Opción Uno”
2 -> “Opción Dos”
3 -> “Opción Tres”
4 -> “Opción Cuatro”
Otro valor -> “No existe la opción elegida”
**/


function elegirOpcion (opcion){
  var message='';
  switch(opcion){
    case 1: message='Opción Uno'; break;
    case 2: message='Opción Dos'; break;
    case 3: message='Opción Tres'; break;
    case 4: message='Opción Cuatro'; break;
    default: message='No existe la opción elegida';
  }

  return message;

};

module.exports.elegirOpcion = elegirOpcion;
