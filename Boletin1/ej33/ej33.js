/* Escribir un programa que solicite la carga de un número entre 0 y 999, y nos muestre un mensaje de cuántos dígitos tiene el mismo. 
Finalizar el programa cuando se cargue el valor 0.
 */
let  numero;
while(true){
numero = Number(prompt('Introduzca un numero entre 1 y 999 (0 para terminar) : '));

if(numero === 0){
    alert('cerrando el programa');
    break;
}

if (numero >= 1 && numero <10){
    alert('El numero tiene una cifra')
    continue;
}
if(numero >=10 && numero <100){
    alert('El numero tiene dos cifras')
    continue;

}

if (numero >= 100 && numero <1000){
    alert('El numero tiene 3 cifras')
    continue;

}
}