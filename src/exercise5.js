/**

Crear un componente “Coche”.
El coche tendrá como atributos, el color, marca, velocidad, matricula, número de kilómetros, un estado para ver si está Apagado o Encendido.
Como acciones tendrá, crear, arrancar, acelerar, frenar y apagar

**/

function Coche(color, marca, matricula){
  var that = this;

  that.color = color;
  that.marca = marca;
  that.matricula = matricula;

  that.velocidad = 0;
  that.kilometers = 0;
  that.status = false;

  that.crear = function(){

  }

  that.arrancar = function(){
    that.status = true;
    that.velocidad = 0;
  }

  that.acelerar = function(v){
    if(that.status){
      that.velocidad += v;
    }
  }

  that.frenar = function(v){
    if(that.status){
      that.velocidad -= v;
    }
  }

  that.apagar = function(){
    that.status = false;
    that.velocidad = 0;
  }

  that.toString = function(){
    return 'Coche: ' + that.marca + ' ' + that.color + ' ' + that.matricula + ' ' + that.kilometers + 'km ' + that.velocidad + 'km/h ' +
      (that.status ? 'ENCENDIDO' : 'APAGADO');
  }


};

module.exports.Coche = Coche;
