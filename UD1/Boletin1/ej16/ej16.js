/* Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo. */
let n = Number(prompt('Introduzca un numero'))

if (n>0){
    alert('El numero es positivo')
}
else if(n<0){
    alert('El numero es negativo')
}
else{
    alert('El numero es cero')
}