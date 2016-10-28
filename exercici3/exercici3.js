//Exportamos el modulo os
var os=require('os');
//Printamos la memoria libre
console.log('Memoria lliure:'+os.freemem()+' bytes');
//Creamos el vector
var numeros=[];
//Lo llenamos con un millon de numeros
for(var i=0; i<1000000;i++){

numeros.push(i);
}
//Volvemos a printar la memoria libre
console.log('Memoria lliure:'+os.freemem()+' bytes');