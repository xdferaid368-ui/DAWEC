const cuadrado = document.getElementById("cuadrado");
const salida = document.getElementById("salida");
const txtEntrada = document.getElementById("txtEntrada");

cuadrado.addEventListener("mouseenter", function(i){
    cuadrado.classList.add("amarillo");
    salida.textContent = "Evento: " + i.type + " Objeto: " + i.target.id +' coordenada x: ' + i.clientX +' cordenada y '+ i.clientY
})

cuadrado.addEventListener("mouseleave" , function(e){
    cuadrado.classList.remove("amarillo");
    salida.textContent = ""
})

txtEntrada.addEventListener("keydown", function(e){
    salida.textContent= 'tecla pulsada = ' + e.key;
})
