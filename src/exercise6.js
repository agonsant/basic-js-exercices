/**

Crear una función “MCD”, que calcule el máximo común divisor de dos números utilizando el algoritmo de Euclides.
Este algoritmo indica que dado dos números enteros positivos, que los llamaremos “m” y “n”, que uno sea mayor que otro (m>n).
Para encontrar su MCD (el mayor número positivo que los divide a los dos) hay que:
-	Obtener el resto (“r”) de la división entre “m” y “n”.
-	Si r=0 entonces el MCD es “n”
-	Si no el MCD es el MCD(n,r), es decir, es el máximo común divisor de “n” y “r”

Pistas:
-	Para calcular el resto de una división existe el operador módulo que es %. EJ: 3%2=1.
-	Se puede/debe hacer sin recursividad.

**/

function mcd(a, b){
  var r,m,n=NaN, finished=false;
  if(typeof a === 'number' && typeof b === 'number' && a>=0 && b>=0){
    if(a>b){
      m=a;
      n=b
    }else{
      m=b;
      n=a;
    }
    finished = n===0;
    while(!finished){
      r=m%n;
      if(r===0 || isNaN(r)){
        finished=true;
      }else{
        m=n;
        n=r;
      }
    }
  }
  return n;
}

module.exports.mcd = mcd;
