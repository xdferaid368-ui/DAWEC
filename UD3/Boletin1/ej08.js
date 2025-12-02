const select = document.forms["formulario"].opciones;

select.addEventListener("change", function(evento) {
    const seleccionado = evento.target.value;
    const texto = document.getElementById('texto');
    if (seleccionado === 'quitarestilos') {
        texto.style = '';
        texto.className = '';
    }
    else if (seleccionado === 'atributoStyle') {
        texto.style = 'color: blue; font-size: 20px; font-family: Helvetica;';
        texto.className = '';
    }
    else if (seleccionado === 'asignandoClases') {
        texto.style = '';
        texto.className = 'claseEstilo';
    }
    else if (seleccionado === 'estilosPagina') {
        const link = document.getElementById('estilo');
        link.href = 'ej08.css';
    }
});
