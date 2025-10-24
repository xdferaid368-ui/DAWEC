let sueldo = parseFloat(prompt("Introduzca el Salario del Operario: "))
let Nombre = String(prompt("Introduzca el Nombre del Operario"))

document.getElementById("salida1").innerHTML = "El Operario se llama : " + Nombre;
document.getElementById("salida2").innerHTML = "El sueldo de " + Nombre + " es de " + sueldo + " euros"