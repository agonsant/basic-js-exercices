/**

Crear una función “ordenarVuelos”, que dado un array de objetos que representan a vuelos y un booleano, devuelva un array de objetos vuelo ordenados por su fecha de salida.
El booleano representa si el orden es ascendente (más antiguo a mas nuevo) o descendente (más nuevo a más antiguo).
Los objetos vuelo vendrán representados de la siguiente manera:
{
  origen: String con la ciudad de origen,
  destino: String con la ciudad de destino,
  fechaSalida: String con la fecha de salida representada en formato ‘YYYY-MM-DDTHH:MM:SSZ’,
  fechaLlegada: String con la fecha de llegada representada en formato ‘YYYY-MM-DDTHH:MM:SSZ’,
  numeroPlazas: Number
}

**/

/**
* Devuelve -1 si a es menos que b. 0 si a es igual que b y 1 si a es mayor que b
*
*/
function comparator(a, b){
  var dateA = new Date(a.fechaSalida);
  var dateB = new Date(b.fechaSalida);
  return dateA === dateB ? 0 : (dateA<dateB ? -1 : 1);
}

/**
* Uses QuickSort algorithm recursive
* @Complexity O(n^2)
**/
function ordenarVuelosV1(vuelos){
  var left = [],right = [],newFlights = [], pivot, compare;

  if(vuelos.length <=1){
    return vuelos;
  }else{
    pivot = vuelos.pop();
    for(i=0;i<vuelos.length;i++){
      compare = comparator(vuelos[i],pivot);
      if(compare <= 0){
        left.push(vuelos[i]);
      }else{
        right.push(vuelos[i]);
      }
    }
    return newFlights.concat(ordenarVuelosV1(left),pivot,ordenarVuelosV1(right));
  }
}

/**
* Uses Mergesort algorithm
* @Complexity O(n*log(n))
**/
function ordenarVuelosV2(vuelos){
  var length = vuelos.length,
        mid    = Math.floor(length/2),
        left   = vuelos.slice(0, mid),
        right  = vuelos.slice(mid, length);

    if(length === 1) {
      return vuelos;
    }

    return merge(ordenarVuelosV2(left), ordenarVuelosV2(right));

}

function merge(left,right){
  var result = [],compare;
  while(left.length || right.length) {
    if(left.length && right.length) {
      compare = comparator(left[0],right[0]);
      if(compare === -1) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }

  }
  return result;
}

/**
* Uses Array.prototype.sort, that uses mergesort in Firefox and Safari
* @Complexity O(n*log(n))
**/
function ordenarVuelosV3(vuelos){
  return vuelos.sort(comparator);
}


module.exports.ordenarVuelosV1 = ordenarVuelosV1;
module.exports.ordenarVuelosV2 = ordenarVuelosV2;
module.exports.ordenarVuelosV3 = ordenarVuelosV3;
