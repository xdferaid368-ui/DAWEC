/* Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
La cantidad de valores negativos ingresados.
La cantidad de valores positivos ingresados.
La cantidad de múltiplos de 15.
El valor acumulado de los números ingresados que son pares */
let negativos = 0;
let positivos = 0;
let multiplo = 0
let pares = 0;

for (let i = 1; i <= 10; i++){
    let num = Number(prompt('Introduzca el numero ' + i)) 
    if(num<0){
        negativos++
    }
    if(num>0){
        positivos++
    }
    if(num%15==0){
        multiplo++
    }
    if(num%2==0){
    pares += num;
    }
}

alert('Cantidad de valores negativos ingresados = ' + negativos
    + 'Cantidad de valores positivos ingresados = ' + positivos
    + 'Cantidad de Multiplos de 15 ingresados = ' + multiplo
    + 'Valor acumulado de los numeros pares ingresados = ' + pares
)
