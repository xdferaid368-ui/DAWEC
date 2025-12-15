

    document.getElementById('consultar').onclick = function(){
        const seleccionado = document.querySelector('input[name="actores"]:checked');
        console.log(seleccionado.value)
    };