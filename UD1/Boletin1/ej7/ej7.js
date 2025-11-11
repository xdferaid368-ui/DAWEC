//Se debe desarrollar un programa que pida el ingreso del precio de un artículo 
// y las unidades que lleva el cliente. 
// Utilizar un formulario HTML. Mostrar lo que debe abonar el comprador.

let precio = Number(prompt("Introduzca el precio del producto"));
let unidades = Number(prompt("Introduzca cuantas unidades del producto va a comprar"));

let total = precio * unidades;

document.getElementById("salida").innerHTML = 'Deber Pagar un total de ' + total + ' Euros';