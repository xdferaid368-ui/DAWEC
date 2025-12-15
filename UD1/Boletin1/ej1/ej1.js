let edad = prompt("Introduzca su edad (solo numero): ");
let Nombre = String(prompt("Introduzaca Su Nombre"));
let Estadocivil = (String(prompt('Introduzca su estado civil: ')));

document.getElementById("salida").innerHTML = "Su nombre es  "+ Nombre + " Tiene " + edad + " Años " + " y esta actualmente  "+ Estadocivil;