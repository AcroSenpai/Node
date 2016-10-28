//Creamos una variable que contiene todas las funciones del modulo matematicas
var operation=require('./matematicas');
//Introducimos los dos numero que vamos a operar
operation.setNumbers(1,2);
//Printamos por pantalla las operaciones
console.log(operation.getSuma());
console.log(operation.getResta());
console.log(operation.getDivision());
console.log(operation.getMulti());
console.log(operation.getPi());