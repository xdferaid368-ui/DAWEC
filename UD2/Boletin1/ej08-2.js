const txtEntrada = document.getElementById("txtEntrada")

txtEntrada.addEventListener("keydown", function(evento){
        evento.preventDefault();
        alert('No puedes escribir campeon');
    })