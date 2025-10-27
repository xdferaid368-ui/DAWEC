/* Confeccionar un programa que lea por teclado tres números distintos y nos muestre el mayor de ellos.
 */

let n1= Number(prompt('Introduzca un numero'))
let n2= Number(prompt('Introduzca un numero'))
let n3= Number(prompt('Introduzca un numero'))

if(n1 > n2 && n1 > n3){
    alert('El numero mayor es ' + n1)
}
else if(n2 > n1 && n2 > n3){
    alert('El numero mayor es ' + n2)
}
if(n3 > n2 && n3 > n1){
    alert('El numero mayor es ' + n3)
}