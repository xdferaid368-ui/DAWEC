// Capturamos elementos del DOM
const inputTarea = document.querySelector('input[name="tarea"]');
const selectPrioridad = document.querySelector('select[name="prioridad"]');
const boton = document.getElementById("boton");
const tbody = document.getElementById("tbody");


const prioridadValor = {
  "Muy alta": 1,
  "Alta": 2,
  "Media": 3,
  "Baja": 4,
  "Muy baja": 5
};

// Array donde guardamos las tareas
let tareas = [];

// Añadir tarea
boton.addEventListener("click", () => {
  const texto = inputTarea.value.trim();
  const prioridad = selectPrioridad.value;

  if (texto === "") {
    alert("Debes escribir una tarea.");
    return;
  }

  // Guardar la tarea en el array
  tareas.push({
    texto,
    prioridad,
    orden: prioridadValor[prioridad]
  });

  // Ordenar según prioridad
  tareas.sort((a, b) => a.orden - b.orden);

  // Pintar la tabla
  pintarTabla();

  // Limpiar campo
  inputTarea.value = "";
});

// Función que pinta la tabla completa
function pintarTabla() {
  tbody.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${tarea.texto}</td>
      <td>${tarea.prioridad}</td>
      <td style="text-align:center; cursor:pointer;">
        <i class="fa fa-trash w3-text-red" data-index="${index}"></i>
      </td>
    `;

    tbody.appendChild(tr);
  });

  // Activar el evento de borrar para cada papelera
  document.querySelectorAll(".fa-trash").forEach(icon => {
    icon.addEventListener("click", () => {
      const i = icon.getAttribute("data-index");
      tareas.splice(i, 1);
      pintarTabla();
    });
  });
}
