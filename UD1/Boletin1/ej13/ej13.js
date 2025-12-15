//Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'apto',
//  sino 'suspenso'.

let nota = Number(prompt('Introduzca la nota del alumno de cliente'))
let nota2 = Number(prompt('Introduzca la nota del alumno de servidor'))
let nota3 = Number(prompt('Introduzca la nota del alumno de diseño'))

promedio = (nota + nota2 + nota3)/3

if(promedio >= 4){
    document.getElementById("salida").innerHTML = 'apto'
}
else{
    document.getElementById("salida2").innerHTML = 'suspenso'
}