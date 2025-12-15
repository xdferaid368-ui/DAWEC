//Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero.
let n1 = Number(prompt('Introduzca un numero : '))
let n2 = Number(prompt('Introduzca un numero : '))
let n3 = Number(prompt('Introduzca un numero : '))

let operacion = (n1 + n2)*n3
if(n1 == n2 && n2 == n3){
    alert(operacion)
}
else{
    alert('No son iguales')
}