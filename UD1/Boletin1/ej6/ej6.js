//Escribir un programa en el cual se ingresen cuatro números, calcular e informar 
// la suma de los dos primeros y el producto del tercero y el cuarto.

let n1 = Number(prompt('Introduzca un numero'));
let n2 = Number(prompt('Introduzca un numero'));
let n3 = Number(prompt('Introduzca un numero'));
let n4 = Number(prompt('Introduzca un numero'));

let suma = n1 + n2 
let produc = n3 * n4

document.getElementById("salida").innerHTML = 'La suma del primero y el segundo es = ' + suma + ' El producto del tercero y el cuarto es = ' + produc