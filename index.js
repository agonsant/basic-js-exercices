var exercice1 = require('./src/exercise1');
var exercice2 = require('./src/exercise2');
var exercice3 = require('./src/exercise3');
var exercice4 = require('./src/exercise4');
var exercice5 = require('./src/exercise5');
var exercice6 = require('./src/exercise6');
var exercice7 = require('./src/exercise7');

var FLIGHT_SIZE = 100000;
var flights= generateRandomFlightArray(FLIGHT_SIZE);

function executeExercise1(){
  console.log(exercice1.elegirOpcion(3));
  console.log(exercice1.elegirOpcion(2));
  console.log(exercice1.elegirOpcion(4));
  console.log(exercice1.elegirOpcion(1));
  console.log(exercice1.elegirOpcion(-1));
  console.log(exercice1.elegirOpcion(1000));
  console.log(exercice1.elegirOpcion(null));
  console.log(exercice1.elegirOpcion(undefined));
  console.log(exercice1.elegirOpcion(NaN));
  console.log(exercice1.elegirOpcion('Hola'));
}

function executeExercise2(){
  console.log(exercice2.encuentra([1,3,2],3));
  console.log(exercice2.encuentra(null,3));
  console.log(exercice2.encuentra([],3));
  console.log(exercice2.encuentra([2,5,6],3));
  console.log(exercice2.encuentra('adssds',3));
  console.log(exercice2.encuentra(true,3));
}


function executeExercise3V1(){
  var arr = generateOrderedIntegerArray(10000000);
  console.log(exercice3.encuentraOrdenadoV1([1,2,3],3));
  console.log(exercice3.encuentraOrdenadoV1(null,3));
  console.log(exercice3.encuentraOrdenadoV1([],3));
  console.log(exercice3.encuentraOrdenadoV1([2,5,6],3));
  console.log(exercice3.encuentraOrdenadoV1('adssds',3));
  console.log(exercice3.encuentraOrdenadoV1(true,3));

  console.time('encuentraOrdenadoV1');
  console.log(exercice3.encuentraOrdenadoV1(arr,9689470));
  console.timeEnd('encuentraOrdenadoV1');
}

function executeExercise3V2(){
  var arr = generateOrderedIntegerArray(10000000);
  console.log(exercice3.encuentraOrdenadoV2([1,2,3],3));
  console.log(exercice3.encuentraOrdenadoV2([3],3));
  console.log(exercice3.encuentraOrdenadoV2(null,3));
  console.log(exercice3.encuentraOrdenadoV2([],3));
  console.log(exercice3.encuentraOrdenadoV2([2,5,6],3));
  console.log(exercice3.encuentraOrdenadoV2('adssds',3));
  console.log(exercice3.encuentraOrdenadoV2(true,3));

  console.time('encuentraOrdenadoV2');
  console.log(exercice3.encuentraOrdenadoV2(arr,9689470));
  console.timeEnd('encuentraOrdenadoV2');

}

function executeExercise4(){
  console.log(exercice4.mostrarNota(-1));
  console.log(exercice4.mostrarNota(0));
  console.log(exercice4.mostrarNota(4.99));
  console.log(exercice4.mostrarNota(5));
  console.log(exercice4.mostrarNota(7));
  console.log(exercice4.mostrarNota(5.46));
  console.log(exercice4.mostrarNota(8));
  console.log(exercice4.mostrarNota(9));
  console.log(exercice4.mostrarNota(11));
  console.log(exercice4.mostrarNota(true));
  console.log(exercice4.mostrarNota(NaN));
  console.log(exercice4.mostrarNota([]));
  console.log(exercice4.mostrarNota(null));
}

function executeExercise5(){
  var c1 = new exercice5.Coche('Rojo','Seat León', '5678KKK');
  console.log(c1.toString());
  c1.acelerar(10);
  console.log(c1.toString());
  c1.arrancar();
  c1.acelerar(10);
  console.log(c1.toString());
  c1.acelerar(120);
  console.log(c1.toString());
  c1.frenar(60);
  console.log(c1.toString());
  c1.apagar();
  console.log(c1.toString());
}

function executeExercise6(){
  console.log(exercice6.mcd(-1,2));
  console.log(exercice6.mcd(0,2));
  console.log(exercice6.mcd(2,4));
  console.log(exercice6.mcd(4,6));
  console.log(exercice6.mcd(NaN,6));
  console.log(exercice6.mcd(12323,123332));
  console.log(exercice6.mcd(0,0));
  console.log(exercice6.mcd(false,0));
  console.log(exercice6.mcd([],1000));
  console.log(exercice6.mcd('hola',null));
  console.log(exercice6.mcd(300,undefined));
  console.log(exercice6.mcd(4000,496));
  console.log(exercice6.mcd(540,900));

}

function executeExercise7V1(){
  console.time('ordenarVuelosV1');
  // console.log(exercice7.ordenarVuelosV1(flights));
  exercice7.ordenarVuelosV1(flights);
  console.timeEnd('ordenarVuelosV1');
}

function executeExercise7V2(){
  console.time('ordenarVuelosV2');
  // console.log(exercice7.ordenarVuelosV2(flights));
  exercice7.ordenarVuelosV2(flights);
  console.timeEnd('ordenarVuelosV2');
}

function executeExercise7V3(){
  console.time('ordenarVuelosV3');
  // console.log(exercice7.ordenarVuelosV3(flights));
  exercice7.ordenarVuelosV3(flights);
  console.timeEnd('ordenarVuelosV3');
}


function generateOrderedIntegerArray(size){
  var arr = [], i;
  for (i=0; i<size; i++) {
    arr.push(i);
  }
  return arr;
}

function generateRandomFlightArray(size){
  var arr = [], i, randomDate, currentDate = new Date();
  var ORIGINS = ['Madrid', 'Roma', 'Barcelona', 'Paris', 'Londres', 'Sevilla', 'Vigo', 'Amsterdam'];
  var DESTINATIONS = ['Manchester', 'Oviedo', 'Malaga', 'Ibiza', 'Atenas', 'Berlin', 'Munich', 'Moscu'];
  var ONE_DAY_MILLISECONDS = 24*60*60*1000;
  for(i=0; i<size; i++){
    arr.push({
      origen : ORIGINS[Math.floor(Math.random() * 6)],
      destino :DESTINATIONS[Math.floor(Math.random() * 6)],
      numeroPlazas : Math.floor(Math.random() * 100),
    });
    randomDate = generateRandomDate(currentDate, new Date(currentDate.getTime() + 365*ONE_DAY_MILLISECONDS));
    arr[i].fechaSalida = randomDate.toISOString();
    randomDate = generateRandomDate(new Date(randomDate.getTime() + ONE_DAY_MILLISECONDS), new Date(randomDate.getTime() + 10*ONE_DAY_MILLISECONDS));
    arr[i].fechaLlegada =randomDate.toISOString();
  }
  return arr;

  function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}



executeExercise1();
executeExercise2();
executeExercise3V1();
executeExercise3V2();
executeExercise4();
executeExercise5();
executeExercise6();
executeExercise7V1();
executeExercise7V2();
executeExercise7V3();
