let num1 = Number(prompt("Introduzca el primer número:"));
let num2 = Number(prompt("Introduzca el segundo número:"));
if(num1>num2 ){
    let suma = num1 + num2;
    let diferencia = num1 - num2;
    document.getElementById("Resultado").innerHTML = "La suma es igual a: " + suma + " y la diferencia es : " + diferencia;
}
else{
    let producto = num1 * num2;
    let division = num1 / num2;
    document.getElementById("Resultado").innerHTML = "El producto es igual a  " + producto + " y la division es igual a: " + division;   
}