//Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.
let suma = 0;
let altura;
for (let i = 1; i <= 5; i++){
    altura = Number(prompt('Introduce la altura  ' + i + ':'));
    suma += altura;

}

let promedio = suma /5;

alert('La altura promedio es : ' + promedio);