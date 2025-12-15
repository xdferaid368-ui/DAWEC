let nota = Number(prompt('Introduzca la nota del alumno de cliente'))
let nota2 = Number(prompt('Introduzca la nota del alumno de servidor'))
let nota3 = Number(prompt('Introduzca la nota del alumno de diseño'))

promedio = (nota + nota2 + nota3)/3

if(promedio >= 7){
    document.getElementById("salida").innerHTML = 'Triunfaste colega'
}
else{
    document.getElementById("salida2").innerHTML = 'esto no hay quien lo salve'
}