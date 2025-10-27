/* Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresar el 9999 
(no sumar dicho valor, solamente indica que ha finalizado la carga). 
Imprimir el valor acumulado e informar si dicho valor es cero, mayor a cero o menor a cero.
 */

let acumulado= 0

while(true){
    let valor = Number(prompt('Introduzca un numero a acumular (9999 para terminar)'))

    if(valor === 9999){
        alert('Terminando Programa');
        break;
    }
    acumulado += valor
}
alert('El valor acumulado es ' + acumulado)

if (acumulado >0){
    alert('El valor es mayor a cero')
}
else if(acumulado == 0){
    alert('El valor es igual a 0')
}
else{
    alert('El valor es menor a 0')
}