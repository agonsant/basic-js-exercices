/**

Crear una función “encuentra” que dado un array de números desordenado y un número,  devuelva el índice del array en el que se encuentra ese elemento o -1 si no existe.

**/

function encuentra(arr, a){
  var i=0, found=false;
  if(arr){
    while (!found && i<arr.length) {
      found = arr[i] === a;
      i++;
    }
  }
  return found ? i-1 : -1;
};


module.exports.encuentra = encuentra;
