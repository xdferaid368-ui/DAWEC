function calcularperimetro(lado){
    let perimetro = lado*4
    alert('El perimetro del cuadrado es igual a ' + perimetro)
}
lado = Number(prompt('Introduzca el lado del cuadrado: '))
calcularperimetro(lado)