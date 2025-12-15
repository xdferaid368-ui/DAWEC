const boton = document.querySelector('input[name="boton"]');

boton.onclick = function() {
    const seleccionado = document.querySelector('select[name="provincias"]');
    const nombre = seleccionado.options[seleccionado.selectedIndex].text
    console.log( nombre + seleccionado.value);
};