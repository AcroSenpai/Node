//Creacion de las variables
var number1, number2, result;
//Creacion de la constante
const pi = 3.1416;

//Setter para recoger los numeros y guardarlo en las varibales
exports.setNumbers=function(num1,num2){
	number1 = num1;
	number2 = num2;

}
//Getter que hace una suma de los numeros y la retorna
exports.getSuma=function(){
	result = number1 + number2;
	return result;

}
//Getter que hace una resta de los numeros y la retorna
exports.getResta=function(){
	result = number1 - number2;
	return result;

}
//Getter que hace una division de los numeros y la retorna
exports.getDivision=function(){
	result = number1 / number2;
	return result;

}
//Getter que hace una multiplicacion de los numeros y la retorna
exports.getMulti=function(){
	result = number1 * number2;
	return result;

}
//Getter que retorna la constante pi.
exports.getPi=function(){
	return pi;

}