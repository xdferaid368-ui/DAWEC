//Realizar la carga de una nota de un alumno. 
// Mostrar un mensaje que aprobó si tiene una nota mayor o igual a 4.

let nota = Number(prompt('Introduzca la nota del alumno'))

if(nota >= 4){
    document.getElementById("salida").innerHTML = 'Triunfaso Primo'
}
else{
    document.getElementById("salida2").innerHTML = 'Que va compadre'
}