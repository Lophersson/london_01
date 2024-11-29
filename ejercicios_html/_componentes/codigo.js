/*
var CalcularAreaCuadrado = function(lado){
	let Area = lado*lado;
	return Area;
};
var CalcularAreaTriangulo = function(base,altura){
	let Area = ((base*altura) / 2);
	return Area;
}

let AreaCuadrado = CalcularAreaCuadrado(2);
alert( "El área de un cuadrado con lado 2 es " +  AreaCuadrado   );
let AreaTriangulo = CalcularAreaTriangulo(4,3);
alert( "El área de un triangulo con base 4 y altura 3 es " +  AreaTriangulo   );

*/

var Funcion1 = function(){
	let Valor=document.getElementById("campoUno").value;
	alert(Valor);
}
let Elemento = document.getElementById("miBoton");
Elemento.addEventListener('click', Funcion1);














