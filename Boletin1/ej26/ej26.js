let suma = 0;
let valor;

for (let i = 1; i <= 5; i++) {
    valor = Number(prompt('Introduce el valor número ' + i + ':'));
    suma += valor;
}

alert('La suma de los valores es: ' + suma);
