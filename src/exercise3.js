/**

Crear una función “encuentraOrdenado” que dado un array de números ordenado y un número,  devuelva el índice del array en el que se encuentra ese elemento o -1 si no existe.

**/

/**
* @Complexity O(n)
**/
function encuentraOrdenadoV1(arr, a){
  var i=0, found=false;
  if(arr){
    while (!found && i<arr.length) {
      found = arr[i] === a;
      i++;
    }
  }
  return found ? i-1 : -1;
};

/**
* @Complexity O(log(n))
**/
function encuentraOrdenadoV2(arr, a){
  var start, end, i, found=false, finished=false;
  if(arr && arr.length){
    start=0;
    end = arr.length;
    i=Math.floor(arr.length/2);
    while (!finished) {
      if(a === arr[i]){
        found=true;
      }else if (a>arr[i]){
        start = i;
        i = Math.floor((start+end)/2);
      }else{
        end=i;
        i = Math.floor((start+end)/2);
      }
      finished = found || end - start === 1;
    }
  }
  return found ? i : -1;
};



module.exports.encuentraOrdenadoV1 = encuentraOrdenadoV1;
module.exports.encuentraOrdenadoV2 = encuentraOrdenadoV2;
