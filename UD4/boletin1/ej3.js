//Dadas dos variables marca y modelo, crea una frase que se devuelva por consola que diga "El coche es un [marca] [modelo] del año [año actual]".
let marca = "BMW" 
let modelo = "E34"

console.log(`El coche es ${marca} ${modelo} del año ${new Date().getFullYear()}`);
