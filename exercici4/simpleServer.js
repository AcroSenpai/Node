//creamos la variable http para que recoja las funciones de http
var http=require('http');
//Creamos la variable servidor con la funcion createServer
//Con las funciones request y response
var servidor=http.createServer(function(request, response){
	//Escribimos en el Head de la respuesta el mensaje y el tipo de fichero
	response.writeHead(200, {'Content-Type': 'text/html'});
	//Escribimos en el body el contenido de la respuesta
	response.write('<h1>Benvinguts al NODE</h1>');
	//Ceramosla respuesta
	response.end()

});
//Seleccionamos por que puerto escucha
servidor.listen(3000);
//Enviamos un mensaje por consola para ver que funciona
console.log('Connexió establerta');