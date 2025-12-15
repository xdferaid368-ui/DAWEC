let n1 = Number(prompt('Introduzca un numero'))
let n2 = Number(prompt('Introduzca un numero'))

if(n1>n2){
    document.getElementById("salida").innerHTML = n1 + ' es mayor que ' + n2
}
else if(n1 == n2){
    document.getElementById("salida2").innerHTML = 'los numeros son iguales'
}
else if (n1 < n2){
    document.getElementById("salida3").innerHTML = n1 + ' es menor que ' + n2

}