/* Confeccionar un programa que pida por teclado tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes:
Si el promedio es >=7 mostrar "Promocionado".
Si el promedio es >=4 y <7 mostrar "Regular".
Si el promedio es <4 mostrar "Fatal".
 */


let nota = Number(prompt('Introduzca la nota del alumno de cliente'))
let nota2 = Number(prompt('Introduzca la nota del alumno de servidor'))
let nota3 = Number(prompt('Introduzca la nota del alumno de diseño'))

promedio = (nota + nota2 + nota3)/3

if(promedio >= 7){
    document.getElementById("salida").innerHTML = 'Promocionado'
}
else if( promedio >=4 && promedio<7){
    document.getElementById("salida2").innerHTML = 'Regular'
}
else{
    document.getElementById("salida3").innerHTML = 'Fatal'
}