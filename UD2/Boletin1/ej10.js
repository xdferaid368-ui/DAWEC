const salida = document.getElementById("salida")

document.addEventListener("mousedown", function(evento){
    if(evento.button === 0){
        salida.textContent = "has pulsado el boton izquierdo"
    }
    else if(evento.button === 2){
        salida.textContent = "has pulsado el boton derecho"
    }
    else if(evento.button === 1){
        salida.textContent = "Has Pulsado el boton central"
    }
})

document.addEventListener("contextmenu", function(event){
    event.preventDefault();
})
    