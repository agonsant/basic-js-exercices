/**

Crear una función “mostrarNota” que dado un número, devuelva “SUSPENSO” si el número menor que 5, “APROBADO” si está entre 5-7 (sin incluir),
“NOTABLE” si está entre 7 y 9 (sin incluir), y “SOBRESALIENTE” si es mayor o igual que 9.

**/

function mostrarNota(score){
  var scoreMessage = "NO PRESENTADO";
  if(typeof score === 'number'){
    if(score>=0 && score<5){
      scoreMessage = "SUSPENSO";
    }else if(score>=5 && score < 7){
      scoreMessage = "APROBADO";
    }else if(score>=7 && score < 9){
      scoreMessage = "NOTABLE";
    }else if(score>=9 && score <= 10){
      scoreMessage = "SOBRESALIENTE";
    }
  }
  return scoreMessage;
};


module.exports.mostrarNota = mostrarNota;
