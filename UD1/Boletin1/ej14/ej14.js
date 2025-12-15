//Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje 
// indicando si tiene 1, 2, ó 3 cifras. Mostrar un mensaje de error si el número de cifras no es 1, 2 ó 3.
let n1 = (prompt('Introduzca Un numero de maximo 3 cifras'))
let longitud = n1.length

if(longitud === 1){
    alert('El numero tiene una cifra')
}
else if (longitud === 2){
    alert('El numero tiene dos cifras')
}
else if (longitud === 3){
    alert('El numero tiene 3 cifras ')
}
else{
    alert('Numero NO valido')
}