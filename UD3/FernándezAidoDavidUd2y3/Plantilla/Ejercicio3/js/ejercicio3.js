const formulario = document.forms["formularioStock"];
const mensajes = document.getElementById("mensajes");
const categoria = document.getElementById("categoria")
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    mensajes.innerHTML = "";

    let camposVacios = [];
    let camposErrores = [];

    const expfabricante = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const expnproducto = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/;
    const expfechaEntrada = /^\d{2}\/\d{2}\/\d{4}$/;
    if(categoria.value = electronica){
        const expCodigo = /^(\ EL-)\/\d{3}\/[A-Z]+$/;
    }
    else if(categoria.value = hogar){
        const expCodigo =/^[A-Za{3}](-)\/\d{4}$/;
    }
    else if(categoria.value = alimentacion){
        const expCodigo = /^(\ AL-)\/\d{2}$/;
    }
})
const {
    fabricante,
    producto,
    fechaEntrada,
    codigo
} = formulario;

for (let campo of formulario.elements) {
    if (campo.type !== "submit" && campo.value.trim() === "") {
    camposVacios.push(campo.name);
    }
}
if (fabricante.value && !expfabricante.test(fabricante.value))
    camposErrores.push("fabricante");

if (nombre.producto && !expnproducto.test(producto.value))
    camposErrores.push("");

if (fechaEntrada.value && !expfechaEntrada.test(fechaEntrada.value))
    camposErrores.push("Fecha de Entrada");

if (codigo.value && !expCodigo.test(codigo.value))
    camposErrores.push("CODIGO");

if (camposErrores.length > 0) {
    const ul = document.createElement("ul");
    ul.textContent = "Campos con errores:";
    camposErrores.forEach(campo => {
    const li = document.createElement("li");
    li.textContent = campo;
    ul.appendChild(li);
    });
    mensajes.appendChild(ul);
}
if (camposVacios.length === 0 && camposErrores.length === 0) {
    formulario.submit();
}
