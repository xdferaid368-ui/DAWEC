let suma = 0;

for (let i = 1; i <= 5; i++) {
    let valor = Number(prompt("Introduce un número (" + i + "/5):"));
    suma = suma + valor; // acumulamos
}

// mostramos el resultado al final
document.getElementById("Salida").innerHTML =
    "La suma de estos 5 valores es: " + suma;
