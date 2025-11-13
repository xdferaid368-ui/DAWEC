const teclado = document.getElementById("teclado");
const salida = document.getElementById("salida");

teclado.addEventListener("click", function(evento){
    const boton = evento.target

    if(boton.tagName === "INPUT" && boton.type === 'button'){
        salida.value += boton.value;
    }
});

