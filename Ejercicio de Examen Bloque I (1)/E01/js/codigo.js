"use strict";

// Instancia del vivero
let oVivero = new Vivero();

// Datos iniciales
datosIniciales();
function datosIniciales() {
    oVivero.altaArbol(new Perenne(1,100,"Olivo",true));
    oVivero.altaArbol(new Caduco(2,78,"Melocotonero","abril"));
    oVivero.altaArbol(new Perenne(3,50,"Ciprés",false));
    oVivero.altaArbol(new Perenne(4,75,"Pino piñonero",true));
    oVivero.altaArbol(new Caduco(5,81,"Melocotonero","abril"));
    oVivero.altaArbol(new Caduco(6,110,"Manzano","mayo"));
    oVivero.altaArbol(new Perenne(7,80,"Cedro",false));
    oVivero.altaArbol(new Caduco(8,67,"Naranjo","marzo"));
    oVivero.altaArbol(new Perenne(9,90,"Alcornoque",true));
    oVivero.altaArbol(new Caduco(10,70,"Peral","marzo"));
}

// Mostrar/ocultar formularios
function gestionFormularios(id) {
    let forms = document.getElementsByTagName("form");
    for(let i=0;i<forms.length;i++) forms[i].style.display="none";

    if(id==="TotalArboles"){
        alert("Hay " + oVivero.totalArbolesVenta() + " árboles a la venta");
        return;
    }
    document.getElementById(id).style.display="block";
}

// Cambiar campos según tipo
function cambiarCamposAlta() {
    let tipo = document.querySelector('input[name="rbtTipoArbol"]:checked').value;
    if(tipo==="perenne"){
        document.getElementById("txtMesFloracion").parentNode.parentNode.style.display="none";
    } else {
        document.getElementById("txtMesFloracion").parentNode.parentNode.style.display="block";
    }
}
var radios = document.querySelectorAll('input[name="rbtTipoArbol"]');
for(let i=0;i<radios.length;i++) radios[i].onclick=cambiarCamposAlta;

// Alta de árbol
function aceptarAltaArbol() {
    let codigo = parseInt(document.getElementById("txtCodigo").value);
    let tallaje = parseInt(document.getElementById("txtTallaje").value);
    let especie = document.getElementById("txtEspecie").value;
    let tipo = document.querySelector('input[name="rbtTipoArbol"]:checked').value;

    if(!codigo || !tallaje || !especie){
        alert("Rellena todos los campos");
        return;
    }

    let arbol;
    if(tipo==="perenne"){
        let frutal = document.querySelector('input[name="rbtFrutal"]:checked').value==="S";
        arbol = new Perenne(codigo,tallaje,especie,frutal);
    } else {
        let mes = document.getElementById("txtMesFloracion").value;
        if(!mes){ alert("Introduce mes de floración"); return; }
        arbol = new Caduco(codigo,tallaje,especie,mes);
    }

    let res = oVivero.altaArbol(arbol);
    alert(res ? "Árbol registrado OK" : "Árbol registrado previamente");
    document.getElementById("frmAltaArbol").reset();
    document.getElementById("frmAltaArbol").style.display="none";
}

// Tallaje de árbol
function aceptarTallaje() {
    let codigo = parseInt(document.getElementById("txtCodigoArbol").value);
    let talla = parseInt(document.getElementById("txtTallajeArbol").value);

    if(!codigo || !talla){ alert("Rellena todos los campos"); return; }

    let mensaje = oVivero.actualizarTallaje(codigo,talla);
    alert(mensaje);
    if(mensaje.includes("Correcto")){
        document.getElementById("frmTallaje").reset();
        document.getElementById("frmTallaje").style.display="none";
    }
}

// Listado perennes
function aceptarListadoPerennes() {
    let minAltura = parseInt(document.getElementById("txtAlturaMinima").value);
    if(!minAltura){ alert("Introduce altura mínima"); return; }

    let perennes = oVivero.listadoPerennes(minAltura);
    let ventana = window.open("","ListadoPerennes","width=400,height=400");
    ventana.document.write("<h2>Árboles perennes</h2>");
    ventana.document.write("<table border='1'><tr><th>Código</th><th>Tallaje</th><th>Especie</th><th>Frutal</th></tr>");
    for(let i=0;i<perennes.length;i++){
        ventana.document.write("<tr><td>"+perennes[i].codigo+"</td><td>"+perennes[i].tallaje+"</td><td>"+perennes[i].especie+"</td><td>"+(perennes[i].frutal?"Sí":"No")+"</td></tr>");
    }
    ventana.document.write("</table>");
    document.getElementById("frmListadoPerennes").reset();
    document.getElementById("frmListadoPerennes").style.display="none";
}

// Listado caducos
function aceptarListadoCaducos() {
    let mes = document.getElementById("txtMesListado").value;
    if(!mes){ alert("Introduce mes de floración"); return; }

    let caducos = oVivero.listadoCaducos(mes);
    let ventana = window.open("","ListadoCaducos","width=400,height=400");
    ventana.document.write("<h2>Árboles caducos mes: "+mes+"</h2>");
    ventana.document.write("<table border='1'><tr><th>Código</th><th>Tallaje</th><th>Especie</th><th>Floración</th></tr>");
    for(let i=0;i<caducos.length;i++){
        ventana.document.write("<tr><td>"+caducos[i].codigo+"</td><td>"+caducos[i].tallaje+"</td><td>"+caducos[i].especie+"</td><td>"+caducos[i].mesFloracion+"</td></tr>");
    }
    ventana.document.write("</table>");
    document.getElementById("frmListadoCaducos").reset();
    document.getElementById("frmListadoCaducos").style.display="none";
}
