/* Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, imprimir en la página la leyenda '
 Todos los números son menores a diez'. */

let n1 = Number(prompt('Introduzca un numero : '))
let n2 = Number(prompt('Introduzca un numero : '))
let n3 = Number(prompt('Introduzca un numero : '))

if(n1<10 && n2<10 && n3<10){
    alert('Todos los numeros son menores de diez')
}
else{
    alert('No Todos los numeros son menores de diez')
}