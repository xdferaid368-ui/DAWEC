//Elaborar una función a la cual le enviemos tres enteros y muestre el menor.

function cualesmenor(n1,n2,n3){
if (n1 < n2 && n2 <n3 ){
    alert('El numero menor es : ' + n1)
}
else if ((n2 < n1 && n1 <n3 )){

    alert('El numero menor es : ' + n2)
} 
else if ((n3 < n2 && n2 < n1 )){
    alert('El numero menor es : ' + n3)
}
}
let n1 = Number(prompt('Introduzca un numero'))
let n2 = Number(prompt('Introduzca un numero'))
let n3 = Number(prompt('Introduzca un numero'))

cualesmenor(n1,n2,n3)