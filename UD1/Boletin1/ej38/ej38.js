/* Realizar un programa que al introducir un número por teclado nos diga si es primo o no. */
let n = Number(prompt('Introduzca el numero a comprobar: '))

raiz = Math.sqrt(n)

for(let i = 2; i<=raiz; i++){
    if(n%i===0){
        alert('El numero no es primo')
        break;
    }
    else{
        alert('El numero es primo')
        break
    }
}