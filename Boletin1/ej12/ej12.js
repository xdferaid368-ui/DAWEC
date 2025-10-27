//Realizar un programa que lea por teclado dos números, 
// si el primero es mayor al segundo informar su suma y diferencia, en caso contrario 
// informar el producto y la división del primero respecto al segundo.

let n1 = Number(prompt('Introduzca un numero'))
let n2 = Number(prompt('Introduzca un numero'))
let suma = n1 + n2;
let diferencia = n1 - n2;
let producto = n1 * n2;
let division = n2/n1;
if(n1>n2){
    document.getElementById("salida").innerHTML = 'La suma de los dos numero es ' + suma  + ' Y la diferencia es' + diferencia;
}
else{
    document.getElementById("salida2").innerHTML = 'El Producto es igual a ' + producto + ' y la division es '  + division;
}