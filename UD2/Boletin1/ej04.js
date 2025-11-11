formulario.boton.addEventListener("click", agregarProvincia);
function agregarProvincia(){
let codigo = frmEntrada.txtCodigo.value;
let provincia = frmEntrada.txtProvincia.value;

let existe = false

for (let i = 0; i < frmEntrada.lstProvincias.options.length; i++) {
        if (frmEntrada.lstProvincias.options[i].value === codigo) {
            existe = true;
            break; 
        }
    }

for (let i = 0; i < frmEntrada.lstDestino.options.length; i++) {
        if (frmEntrada.lstDestino.options[i].value === codigo) {
            existe = true;
            break; 
        }
    
    }
    if(existe){
        alert('La Provincia ya existe')
    }
    else{
        let nuevaOpcion = new Option(provincia, codigo);
        frmEntrada.lstProvincias.add(nuevaOpcion);
    }
}
