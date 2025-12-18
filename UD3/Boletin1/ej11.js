// Esperamos a que cargue todo el HTML antes de tocar el DOM
window.onload = function () {

    /* ===========================
       REFERENCIAS IMPORTANTES
       =========================== */

    // Listas destino
    const ulAprobados = document.getElementById("aprobados");
    const ulRecuperacion = document.getElementById("recuperacion");
    const ulRepetir = document.getElementById("repetir");

    // Div donde se crearán las tablas
    const divTablas = document.getElementById("tablas");

    /* ===========================
       CLICK EN LOS ALUMNOS
       =========================== */

    // Seleccionamos SOLO los <li> de alumnos (no los títulos)
    const alumnos = document.querySelectorAll("#listas ul ul li");

    // A cada alumno le asignamos el evento click
    alumnos.forEach(alumno => {
        alumno.addEventListener("click", moverAlumno);
    });

    // Función que mueve el alumno al hacer click
    function moverAlumno() {

        /* ---------
           RADIO BUTTON
           --------- */

        // Obtenemos el radio seleccionado
        const tipo = document.querySelector('input[name="tipo"]:checked').value;

        // Según el radio, elegimos la lista destino
        let destino;
        if (tipo === "aprob") destino = ulAprobados;
        if (tipo === "recup") destino = ulRecuperacion;
        if (tipo === "repet") destino = ulRepetir;

        /* ---------
           POSICIÓN
           --------- */

        // Obtenemos si va primero o último
        const posicion = document.getElementById("combo").value;

        // this = <li> del alumno que se ha pulsado
        if (posicion === "primero") {
            // prepend mueve el nodo al principio
            destino.prepend(this);
        } else {
            // append mueve el nodo al final
            destino.append(this);
        }
    }

    /* ===========================
       CREAR TABLAS
       =========================== */

    document.getElementById("btnCrearTablas")
        .addEventListener("click", crearTablas);

    function crearTablas() {

        // Primero borramos las tablas existentes
        // para que no se dupliquen
        borrarTablas();

        // Creamos una tabla por cada lista
        divTablas.appendChild(crearTabla("Aprobados", ulAprobados));
        divTablas.appendChild(crearTabla("A recuperación", ulRecuperacion));
        divTablas.appendChild(crearTabla("A repetir", ulRepetir));
    }

    // Función reutilizable para crear una tabla
    function crearTabla(titulo, lista) {

        // Creamos la tabla
        const tabla = document.createElement("table");
        tabla.border = "1";
        tabla.style.margin = "5px";
        tabla.style.float = "left";

        // Título de la tabla
        const caption = document.createElement("caption");
        caption.textContent = titulo;
        tabla.appendChild(caption);

        // Recorremos los alumnos de la lista
        const alumnosLista = lista.querySelectorAll("li");

        alumnosLista.forEach(alumno => {
            const tr = document.createElement("tr");
            const td = document.createElement("td");

            // Copiamos el nombre del alumno
            td.textContent = alumno.textContent;

            tr.appendChild(td);
            tabla.appendChild(tr);
        });

        return tabla;
    }

    /* ===========================
       BORRAR TABLAS
       =========================== */

    document.getElementById("btnBorrarTablas")
        .addEventListener("click", borrarTablas);

    function borrarTablas() {
        // Elimina todo el contenido del div de tablas
        divTablas.innerHTML = "";
    }
};
