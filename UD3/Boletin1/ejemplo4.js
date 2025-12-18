// Esperamos a que cargue todo el HTML
window.onload = function () {

  // Referencias a elementos importantes
  const input = document.getElementById("texto");
  const boton = document.getElementById("add");
  const tbody = document.getElementById("tbody");

  /* ===========================
     AÑADIR FILA
     =========================== */

  boton.addEventListener("click", function () {

    // Obtenemos el texto del input
    const texto = input.value.trim();

    // Evitamos añadir filas vacías
    if (texto === "") return;

    // Creamos la fila
    const tr = document.createElement("tr");

    /* ---- COLUMNA ORDEN ---- */
    const tdOrden = document.createElement("td");
    // El orden es el número de filas actuales + 1
    tdOrden.textContent = tbody.children.length + 1;

    /* ---- COLUMNA TEXTO ---- */
    const tdTexto = document.createElement("td");
    tdTexto.textContent = texto;

    /* ---- COLUMNA BORRAR ---- */
    const tdBorrar = document.createElement("td");
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "X";

    // Evento para borrar la fila
    btnBorrar.addEventListener("click", function () {

      // parentElement del botón es el td
      // parentElement del td es el tr
      tr.remove();

      // Reordenamos los números
      actualizarOrden();
    });

    tdBorrar.append(btnBorrar);

    // Añadimos todas las columnas a la fila
    tr.append(tdOrden);
    tr.append(tdTexto);
    tr.append(tdBorrar);

    // Añadimos la fila a la tabla
    tbody.append(tr);

    // Limpiamos el input
    input.value = "";
  });

  /* ===========================
     ACTUALIZAR ORDEN
     =========================== */

  function actualizarOrden() {

    // Recorremos todas las filas
    Array.from(tbody.children).forEach((fila, index) => {

      // La primera celda es la del orden
      fila.children[0].textContent = index + 1;
    });
  }
};
