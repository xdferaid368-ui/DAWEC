"use strict";

// Instancia de MediaMarkt
let oTienda = new MediaMarkt();
datosIniciales();

// --- Datos iniciales ---
function datosIniciales() {
    oTienda.altaProducto(new Televisor(1, 1000, "LG OLED", 55, true));
    oTienda.altaProducto(new Televisor(2, 500, "Samsung LED", 42, false));
    oTienda.altaProducto(new Movil(3, 1200, "iPhone 14", 512, "iOS"));
    oTienda.altaProducto(new Movil(4, 700, "Samsung Galaxy", 128, "Android"));
}

// --- Gestión de formularios ---
function gestionFormularios(form) {
    ocultarTodosLosFormularios();

    switch (form) {
        case "frmAltaProducto":
            frmAltaProducto.style.display = "block";
            break;
        case "frmActualizarPrecio":
            frmActualizarPrecio.style.display = "block";
            break;
        case "frmListadoTelevisores":
            frmListadoTelevisores.style.display = "block";
            break;
        case "frmListadoMoviles":
            frmListadoMoviles.style.display = "block";
            break;
        case "TotalPremium":
            mostrarTotalPremium();
            break;
    }
}

function ocultarTodosLosFormularios() {
    let forms = document.querySelectorAll("form");
    forms.forEach(f => f.style.display = "none");
}

// --- Alta de producto ---
function aceptarAltaProducto() {
    let tipo = document.querySelector("input[name='rbtTipo']:checked").value;
    let codigo = parseInt(document.getElementById("txtCodigo").value);
    let nombre = document.getElementById("txtNombre").value;
    let precio = parseFloat(document.getElementById("txtPrecio").value);

    let producto;
    if(tipo === "televisor"){
        let pulgadas = parseInt(document.getElementById("txtPulgadas").value);
        let smart = document.getElementById("chkSmart").checked;
        producto = new Televisor(codigo, precio, nombre, pulgadas, smart);
    } else {
        let almacenamiento = parseInt(document.getElementById("txtAlmacenamiento").value);
        let sistema = document.getElementById("txtSistema").value;
        producto = new Movil(codigo, precio, nombre, almacenamiento, sistema);
    }

    if(oTienda.altaProducto(producto)){
        alert("Producto añadido correctamente");
    }
}

// --- Actualizar precio ---
function aceptarActualizarPrecio() {
    let codigo = parseInt(document.getElementById("txtCodigoActualizar").value);
    let nuevoPrecio = parseFloat(document.getElementById("txtNuevoPrecio").value);

    if(oTienda.actualizarPrecio(codigo, nuevoPrecio)){
        alert("Precio actualizado correctamente");
    } else {
        alert("Producto no encontrado");
    }
}

// --- Listado Televisores ---
function aceptarListadoTelevisores() {
    let minPulgadas = parseInt(document.getElementById("txtMinPulgadas").value);
    let tabla = oTienda.listadoTelevisores(minPulgadas);
    let ventana = window.open("", "_blank");
    ventana.document.write(tabla);
}

// --- Listado Moviles ---
function aceptarListadoMoviles() {
    let sistema = document.getElementById("txtSistemaListado").value;
    let tabla = oTienda.listadoMoviles(sistema);
    let ventana = window.open("", "_blank");
    ventana.document.write(tabla);
}

// --- Mostrar total productos premium ---
function mostrarTotalPremium() {
    let total = oTienda.totalProductosPremium();
    alert("Total de productos premium: " + total);
}

// --- Mostrar/ocultar campos según tipo ---
document.querySelectorAll("input[name='rbtTipo']").forEach(r => {
    r.addEventListener("change", e => {
        if (e.target.value === "televisor") {
            document.getElementById("opcionesTelevisor").style.display = "block";
            document.getElementById("opcionesMovil").style.display = "none";
        } else {
            document.getElementById("opcionesTelevisor").style.display = "none";
            document.getElementById("opcionesMovil").style.display = "block";
        }
    });
});

// --- Asociar botones a funciones ---
document.getElementById("btnAltaProducto").addEventListener("click", aceptarAltaProducto);
document.getElementById("btnActualizarPrecio").addEventListener("click", aceptarActualizarPrecio);
document.getElementById("btnListadoTelevisores").addEventListener("click", aceptarListadoTelevisores);
document.getElementById("btnListadoMoviles").addEventListener("click", aceptarListadoMoviles);
document.getElementById("btnTotalPremium").addEventListener("click", mostrarTotalPremium);