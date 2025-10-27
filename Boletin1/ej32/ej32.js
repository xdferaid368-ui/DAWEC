//Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
let pares = 0;
let impares = 0;
let ns;
for (let i = 1; i <= 5; i++){
    ns = Number(prompt('Introduzca el numero ' + i + ' :'))
    if(ns%2 == 0){
    pares++
    }
    else{
        impares++
    }
  
}
  alert('Hay ' + pares+ ' Numeros pares y ' + impares + ' numeros impares')