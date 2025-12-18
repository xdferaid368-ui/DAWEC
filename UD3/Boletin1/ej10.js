// Esperamos a que cargue todo el documento
window.onload = function () {

    /* ===========================
       REFERENCIAS A ELEMENTOS
       =========================== */

    const inputTarea = document.querySelector('input[name="tarea"]');
    const selectPrioridad = document.querySelector('select[name="prioridad"]');
    const boton = document.getElementById("boton");
    const tbody = document.getElementById("tbody");

    /* ===========================
       ESTRUCTURA DE DATOS
       =========================== */

    // Array donde guardamos las tareas
    // Cada tarea será un objeto
    let tareas = [];

    // Mapa de prioridades para poder ordenarlas
    // Número más bajo = más prioridad
    const prioridadValor = {
        "Muy alta": 1,
        "Alta": 2,
        "Media": 3,
        "Baja": 4,
        "Muy baja": 5
    };

    /* ===========================
       EVENTO BOTÓN
       =========================== */

    boton.addEventListener("click", agregarTarea);

    function agregarTarea() {

        // Obtenemos valores del formulario
        const texto = inputTarea.value.trim();
        const prioridad = selectPrioridad.value;

        // Evitamos tareas vacías
        if (texto === "") return;

        // Creamos el objeto tarea
        const tarea = {
            texto: texto,
            prioridad: prioridad
        };

        // Añadimos la tarea al array
        tareas.push(tarea);

        // Ordenamos el array por prioridad
        ordenarTareas();

        // Volvemos a pintar la tabla
        pintarTabla();

        // Limpiamos el input
        inputTarea.value = "";
    }

    /* ===========================
       ORDENAR TAREAS
       =========================== */

    function ordenarTareas() {
        tareas.sort((a, b) => {
            return prioridadValor[a.prioridad] - prioridadValor[b.prioridad];
        });
    }

    /* ===========================
       PINTAR TABLA
       =========================== */

    function pintarTabla() {

        // Limpiamos la tabla antes de volver a pintarla
        tbody.innerHTML = "";

        // Recorremos las tareas
        tareas.forEach((tarea, index) => {

            const tr = document.createElement("tr");

            /* ---- ORDEN ---- */
            const tdOrden = document.createElement("td");
            tdOrden.textContent = index + 1;
            tr.appendChild(tdOrden);

            /* ---- TEXTO TAREA ---- */
            const tdTexto = document.createElement("td");
            tdTexto.textContent = tarea.texto;
            tr.appendChild(tdTexto);

            /* ---- PRIORIDAD ---- */
            const tdPrioridad = document.createElement("td");
            tdPrioridad.textContent = tarea.prioridad;
            tr.appendChild(tdPrioridad);

            /* ---- PAPELERA ---- */
            const tdEliminar = document.createElement("td");

            // Icono de papelera usando FontAwesome
            const icono = document.createElement("i");
            icono.className = "fa fa-trash";
            icono.style.cursor = "pointer";

            // Evento para eliminar la tarea
            icono.addEventListener("click", function () {
                eliminarTarea(index);
            });

            tdEliminar.appendChild(icono);
            tr.appendChild(tdEliminar);

            // Añadimos la fila a la tabla
            tbody.appendChild(tr);
        });
    }

    /* ===========================
       ELIMINAR TAREA
       =========================== */

    function eliminarTarea(indice) {

        // Eliminamos la tarea del array
        tareas.splice(indice, 1);

        // Volvemos a pintar la tabla
        pintarTabla();
    }
};
