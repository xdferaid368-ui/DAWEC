const txtEntrada = document.getElementById("txtEntrada")

txtEntrada.addEventListener("keydown", function(evento){
    if(evento.key >= '0' && evento.key <=9 ){
        evento.preventDefault();
        alert('No puedes poner Numeros chavalin');
    }
})