const form = document.forms["formulario"]

form.addEventListener("submit", function(evento){
    const texto = form.txtTexto.value.trim();


    if (texto == ""){
        evento.preventDefault()
        alert("No puedes dejar eso vacio anormal ")
    }
})