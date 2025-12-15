const botonMarcar = document.getElementById("botonMarcar")
const checkBox = document.getElementById("verano")

function activarCheckbox(){
    checkBox.checked = !checkBox.checked;

}

function anadeManejador(){
    botonMarcar.addEventListener("click", activarCheckbox)
}

function eliminaManejador(){
    botonMarcar.removeEventListener("click", activarCheckbox)
}