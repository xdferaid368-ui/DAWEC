function contardigitos(n){
    return n.toString().length;
}

let numero = Number(prompt("Introduce un número entero positivo:"));
alert("Cantidad de dígitos: " + contardigitos(numero));
