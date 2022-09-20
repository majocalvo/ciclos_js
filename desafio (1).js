/* Desafío: javaScript

Nombre de Desafío: ciclos_js

Instrucciones */

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return x > y ? x : y;
}
console.log(obtenerMayor(10,5));

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return edad >= 18 ? "Allowed" : "Not allowed";
}
console.log(mayoriaDeEdad(19))
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status == 1) return "Online";
  if(status == 2) return "Away";
  else return "Offline";

}
console.log(conection(2))

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
if(idioma == "aleman") return "Guten Tag!";
if(idioma == "mandarin") return "Ni Hao!";
if(idioma == "ingles") return "Hello!";
else return "Hola!";

}

console.log(saludo("mandarin"))

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch(color){
    case 'blue':
      return "This is blue";
    case 'red':
      return "This is red";
    case 'green':
      return "This is green";
    case 'orange':
      return "This is orange";
    default:
      return "Color not found";
  }
}

console.log(colors("orange"))

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  return numero == 10 || numero == 5
}

console.log(esDiezOCinco(10))


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  return numero < 50 && numero > 20;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  return numero % 1 == 0;
}

console.log(esEntero(0.5));

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

 if (numero % 15 == 0) return "fizzbuzz"
  if (numero % 3 == 0) return "fizz"
  if (numero % 5 == 0) return "buzz"
  else return "numero}"
}

console.log(fizzBuzz(15))

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
 if (num1 > num2 && num1 > num3 && num1 > 0 ) return "Número 1 es mayor y positivo";
 if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
 if (num3 > num2 && num3 > num1) return ++num3;
 if (num1 == 0 || num2 == 0 || num3 == 0) return "Error";
 else return "false";
}

console.log(operadoresLogicos(0,2,8));


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
if(numero < 2) return false;
if(numero == 2) return true;
for (let i = 2; i < numero; i ++){
  if (numero % i == 0) return false;
}
return true;
}
console.log(esPrimo(529))

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  return valor == true? "Soy verdadero" : "Soy falso"
}

console.log(esVerdadero(true))

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  let arr = []
  for (let i = 0 ; i<11; i++){
    arr.push(i+6);
  }
  return arr;
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
return numero >99 && numero < 1000
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

 var a = numero
  var i = 0
  do {
    i++
    a = a + 5
    
  } while (i<8)
  return a 
}

console.log(doWhile(5))
// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array(0);
}




function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length-1];
}
console.log(devolverUltimoElemento([5,7,4,3,8,9]));

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.lenght
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arr=[];
  for (let i=0; i < array.lenght; i++){
    arr[i] = array[i] + 1;
  }
  return arr;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array[array.lenght] = elemento;
return array;
}

console.log (agregarItemAlFinalDelArray([5,4]))

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return away
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join('')
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i>array.lenght; i++){
    if(array[i] == elemento) return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
  for (let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i]
  }
  return suma
}
console.log(agregarNumeros([5,2]));


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var num = numeros[0];
  for (let i=0; i <numeros.lenght; i++){
    if(numeros[i]>num){
      num = numeros[i];
    }
  }
  return num
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;

  var total = 1;
  for (var i = 0; i < arguments.length; i++){
    total = total * arguments[i]; 
  } 
  return total;
}

console.log(multiplicarArgumentos([2,3,4]));



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0
  for (let i = 0; i < arreglo.lenght; i++)
  if (arreflo[i] > 18){
    contador++;
  }
return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  return numeroDeDia == 1 || numeroDeDia == 7 
  ? "Es fin de semana" 
  : "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  let num = n.toString()
  num[0] == "9"? true : false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
 for (let i = 0; i <arreglo.lenght; i++){
  if(arreglo[i] != arreglo[i+1]) return false;
 } 
 return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
var arr = []
for (let i = 0; i <array.length; i++){
if(
  array[i] == 'Enero' ||
  array[i] == 'Marzo' ||
  array[i] == 'Noviembre'
  ){
    arr.push (array[i]);
  }
}
if (arr.length < 3) return "No se encontraron los meses pedidos";
else return arr;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var arr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100) {
      arr.push(array[i]);
    }
  }
  return arr;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var arr = []
  var sum = numero

for (let i = 0; i < 10; i++){
  suma = suma + 2
  if (suma == i) break
  else {
    arr.push(sum);
  }
}
if(i>10){
  return 'Se interrumpió la ejecución'
} else{
  return arr
}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var arr = []
  var sum = numero
  for (let i = 0; i < 10; i++){
    if(i == 5) continue
    else{
      sum=sum+2;
      arr.push(sum);
    }
    return arr
  }
}