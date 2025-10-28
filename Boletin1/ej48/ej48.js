
function sumar(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const resultadosm = num1 + num2
    document.getElementById('resultado').innerHTML = 'La suma de los dos numeros es = ' + resultadosm
}
function restar(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const resultadors = num1 - num2
    document.getElementById('resultado').innerHTML = 'La resta de los dos numeros es = ' + resultadors
}
function multiplicar(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const resultadomlt = num1 * num2
    document.getElementById('resultado').innerHTML = 'La multiplicacion de los dos numeros es = ' + resultadomlt
}
function dividir(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const resultadodv = num1 / num2
    document.getElementById('resultado').innerHTML = 'La division de los dos numeros es = ' + resultadodv
}