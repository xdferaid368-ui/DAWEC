// Crea una función sumar que pueda recibir cualquier cantidad de números como argumentos y devuelva la suma total. 
// Para resolverlo tienes que usar rest parameter como argumento de la función y el método reduce del objeto predefinido Array.



const sumar = (...numeros) => {
    return numeros.reduce((num, suma) => num + suma, 0)
}

console.log(sumar(8, 2, 5))

