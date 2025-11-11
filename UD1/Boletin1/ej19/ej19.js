/* Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad. (No utilizar todavía objeto Date) */

let mes = prompt('Introduzca el mes')
let dia = prompt('Introduzca el dia')

if (mes == 12 && dia == 25){
    alert('ES NAVIDAD')
}
else{
    alert('No es navidad macho')
}