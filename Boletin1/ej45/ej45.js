//Elaborar una función que reciba tres enteros y retorne el promedio.

function calcularPromedio(n1,n2,n3){
    let promedio = (n1 + n2 + n3)/3;
    alert('El promedio de los 3 numeros es : ' + promedio);
}

let n1 = Number(prompt('Introduzca un numero :'));
let n2 = Number(prompt('Introduzca un numero :'));
let n3 = Number(prompt('Introduzca un numero :'));

calcularPromedio(n1,n2,n3);