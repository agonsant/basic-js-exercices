# basic-js-exercices
Solutions for the Basic JavaScript course.

### Ejercicio 1

Crear una función “elegirOpcion” que dado un número, devuelva un texto dependiendo del valor de ese número.
1 -> “Opción Uno”
2 -> “Opción Dos”
3 -> “Opción Tres”
4 -> “Opción Cuatro”
Otro valor -> “No existe la opción elegida”

### Ejercicio 2

Crear una función “encuentra” que dado un array de números desordenado y un número,  devuelva el índice del array en el que se encuentra ese elemento o -1 si no existe.

### Ejercicio 3

Crear una función “encuentraOrdenado” que dado un array de números ordenado y un número,  devuelva el índice del array en el que se encuentra ese elemento o -1 si no existe.

### Ejercicio 4

Crear una función “mostrarNota” que dado un número, devuelva “SUSPENSO” si el número menor que 5, “APROBADO” si está entre 5-7 (sin incluir), “NOTABLE” si está entre 7 y 9 (sin incluir), y “SOBRESALIENTE” si es mayor o igual que 9.

### Ejercicio 5

Crear un componente “Coche”.
El coche tendrá como atributos, el color, marca, velocidad, matricula, número de kilómetros, un estado para ver si está Apagado o Encendido.
Como acciones tendrá, crear, arrancar, acelerar, frenar y apagar

### Ejercicio 6

Crear una función “MCD”, que calcule el máximo común divisor de dos números utilizando el algoritmo de Euclides. Este algoritmo indica que dado dos números enteros positivos, que los llamaremos “m” y “n”, que uno sea mayor que otro (m>n). Para encontrar su MCD (el mayor número positivo que los divide a los dos) hay que:
-	Obtener el resto (“r”) de la división entre “m” y “n”.
-	Si r=0 entonces el MCD es “n”
-	Si no el MCD es el MCD(n,r), es decir, es el máximo común divisor de “n” y “r”

Pistas:
-	Para calcular el resto de una división existe el operador módulo que es %. EJ: 3%2=1.
-	Se puede/debe hacer sin recursividad.

### Ejercicio 7

Crear una función “ordenarVuelos”, que dado un array de objetos que representan a vuelos y un booleano, devuelva un array de objetos vuelo ordenados por su fecha de salida. El booleano representa si el orden es ascendente (más antiguo a mas nuevo) o descendente (más nuevo a más antiguo).
Los objetos vuelo vendrán representados de la siguiente manera:
{
  origen: String con la ciudad de origen,
  destino: String con la ciudad de destino,
  fechaSalida: String con la fecha de salida representada en formato ‘YYYY-MM-DDTHH:MM:SSZ’,
  fechaLlegada: String con la fecha de llegada representada en formato ‘YYYY-MM-DDTHH:MM:SSZ’,
  numeroPlazas: Number
}
