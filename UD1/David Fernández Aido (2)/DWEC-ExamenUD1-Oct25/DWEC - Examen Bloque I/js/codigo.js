datosIniciales();

function datosIniciales() {}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCatalogo":
      frmAltaCatalogo.style.display = "block";
      break;
    case "frmEntradaStock":
      frmEntradaStock.style.display = "block";
      break;
    case "frmSalidaStock":
      frmSalidaStock.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

function aceptarAltaProducto() {
    let nombre = document.getElementById("txtNombre").value;
    let precio = parseFloat(document.getElementById("txtPrecio").value);

    let Electrodomestico;
    if(nombre === "televisor"){
        let pulgadas = parseInt(document.getElementById("txtPulgadas").value);
        let fullHD = document.getElementById("rbtFullHD").checked;
        Electrodomestico = new Televisor(codigo, precio, nombre, pulgadas, smart);
    } else {
        let carga = parseInt(document.getElementById("txtcarga").value);
        Electrodomestico = new Lavadora( precio, nombre, carga );
    }
}

function aceptarEntradaStock() {
  // Añadir código
}

function aceptarSalidaStock() {
  // Añadir código
}

function mostrarListadoCatalogo(listadoTelevisores, listadolavadoras){
    listadolavadoras(carga);
    listadoTelevisores(minPulgadas);

}

function mostrarListadoStock() {
  // Añadir código
}

function mostrarTotales() {
  // Añadir código
} 

