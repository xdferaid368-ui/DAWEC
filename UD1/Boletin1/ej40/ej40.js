//Confeccionar una función que reciba dos números y muestre en la página los valores comprendidos entre ellos de uno en uno. Cargar por teclado esos dos valores.

function monstrarentre(n1, n2){
let contador = n1
let salida = ''

while (contador<n2){
    salida += contador + " ";
    contador++;

}
document.getElementById("salida").innerText = salida;
}

let n1  = Number(prompt('Introduzca el primer numero : '))
let n2  = Number(prompt('Introduzca el Segundo numero : '))

monstrarentre(n1, n2);
