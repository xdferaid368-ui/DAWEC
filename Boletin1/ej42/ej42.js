/* Confeccione una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.
 */
function ordenaNum(n1,n2,n3){
  /*   let mayor = Math.max(n1,n2,n3)
    let menor = Math.min(n1,n2,n3)
    let medio = (n1+n2+n3)-(mayor+menor)
    alert('El Orden de menor a mayor seria: ' +  menor  +  medio  +  mayor )   */
    numeros = [n1, n2, n3]
    numeros.sort((a,b) => a-b);
    alert(numeros)

}

let n1 = Number(prompt('Introduzca un numero'))
let n2 = Number(prompt('Introduzca un numero'))
let n3 = Number(prompt('Introduzca un numero'))
ordenaNum(n1,n2,n3)

