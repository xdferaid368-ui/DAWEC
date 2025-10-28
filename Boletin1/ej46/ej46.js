//Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

function sumarvalores(n1,n2,n3,n4,n5){
    suma = n1 + n2 + n3 + n4 + n5
    alert('La suma de todos los valores son : ' + suma)
}

let n1 = Number(prompt('Introduzca un numero: '))
let n2 = Number(prompt('Introduzca un numero: '))
let n3 = Number(prompt('Introduzca un numero: '))
let n4 = Number(prompt('Introduzca un numero: '))
let n5 = Number(prompt('Introduzca un numero: '))

sumarvalores(n1,n2,n3,n4,n5)