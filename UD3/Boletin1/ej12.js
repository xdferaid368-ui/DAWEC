// Esperamos a que cargue todo el HTML
window.onload = function () {

    /* ===========================
       SELECCIÓN DE IMÁGENES
       =========================== */

    // Seleccionamos TODAS las imágenes de la página
    // Estén donde estén
    const imagenes = document.querySelectorAll("img");

    // A cada imagen le asignamos el evento click
    imagenes.forEach(img => {
        img.addEventListener("click", function () {

            // toggle:
            // - si NO tiene la clase -> la añade
            // - si YA la tiene -> la quita
            this.classList.toggle("seleccionado");
        });
    });

    /* ===========================
       BOTÓN BORRAR
       =========================== */

    document.getElementById("btnBorrar").addEventListener("click", borrarImagenes);

    function borrarImagenes() {

        // Seleccionamos todas las imágenes seleccionadas
        const seleccionadas = document.querySelectorAll(".seleccionado");

        // Las eliminamos del DOM
        seleccionadas.forEach(img => {
            img.remove();
        });
    }

    /* ===========================
       BOTÓN APLICAR
       =========================== */

    document.getElementById("btnAplicar").addEventListener("click", aplicarCambios);

    function aplicarCambios() {

        /* ---------
           OBTENER OPCIONES
           --------- */

        // Contenedor destino (radio)
        const destinoId = document.querySelector('input[name="sitio"]:checked').value;
        const contDestino = document.getElementById(destinoId);

        // Posición (primer o último lugar)
        const lugar = document.querySelector('input[name="lugar"]:checked').value;

        // Checkbox clonar
        const clonar = document.querySelector('input[name="clonar"]').checked;

        // Imágenes seleccionadas
        const seleccionadas = document.querySelectorAll(".seleccionado");

        /* ---------
           MOVER / CLONAR
           --------- */

        seleccionadas.forEach(img => {

            // Si hay que clonar, clonamos la imagen
            let imagenMover;
            if (clonar) {
                imagenMover = img.cloneNode(true);
            } else {
                imagenMover = img;
            }

            // Quitamos la selección (tanto original como clon)
            imagenMover.classList.remove("seleccionado");

            // PRIMER LUGAR:
            // justo después del <h3> del contenedor
            if (lugar === "first") {

                // firstElementChild es el h3
                const titulo = contDestino.firstElementChild;

                // insertBefore: insertar antes del siguiente nodo
                contDestino.insertBefore(imagenMover, titulo.nextSibling);

            } else {
                // ÚLTIMO LUGAR:
                // append añade después del último elemento
                contDestino.append(imagenMover);
            }

            // Si estamos clonando, la original también pierde selección
            if (clonar) {
                img.classList.remove("seleccionado");
            }
        });
    }
};