//Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales 
// (tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==).

let clave = String(prompt('Introduzca la clave'))
let confirmacion = String(prompt('Introduzca de nuevo la clave'))

if(clave == confirmacion){
    document.getElementById("salida").innerHTML = 'La clave es correcta'
}
else{
    document.getElementById("salida2").innerHTML = 'Las claves no coinciden'
}