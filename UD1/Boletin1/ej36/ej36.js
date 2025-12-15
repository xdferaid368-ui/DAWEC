/* Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos). 
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.
 */
let n = Number(prompt('Introduzca el numero del que quiere ver la tabla'))
for (let i = 1; i<=12; i++){
console.log(n + ' x ' + i + '= ' + (n*i) );
}
