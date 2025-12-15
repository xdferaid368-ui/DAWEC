/* De un candidato a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del candidato, cantidad total de preguntas
que se le realizaron y cantidad de preguntas que contestó correctamente. 
Se pide confeccionar un programa que lea los datos del candidato e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, 
y sabiendo que:
Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel bajo: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%.
 */

let nombre = String(prompt('Introduzca el Nombre del candidato: '))
let npreguntas = Number(prompt('Introduzca el numero de preguntas que ha realizado el candidato: '))
let correctas = Number(prompt('Introduzca cuantas ha respondido correctamente'))

let porcentajecorrectas = (correctas / npreguntas ) * 100;

if(porcentajecorrectas >= 90){
    alert('El candidato ' + nombre + ' Es de nivel superior')
}
else if(porcentajecorrectas >= 75 && porcentajecorrectas < 90){
    alert('El candidato ' + nombre + ' Es de nivel medio')
}
else if(porcentajecorrectas >= 50 && porcentajecorrectas < 75){
    alert('El candidato ' + nombre + ' Es de nivel bajo')
}
else if(porcentajecorrectas < 50){
    alert('El candidato ' + nombre + ' Esta fuera del nivel')
}
