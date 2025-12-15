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
let tareas = [];
boton.addEventListener("click", () => {
  const texto = inputTarea.value.trim();
  const prioridad = selectPrioridad.value;

  if (texto === "") {
    alert("Debes escribir una tarea.");
    return;
  }
  tareas.push({
    texto,
    prioridad,
    orden: prioridadValor[prioridad]
  });
  tareas.sort((a, b) => a.orden - b.orden);
  pintarTabla();
  inputTarea.value = "";
});

function pintarTabla() {
  tbody.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${tarea.texto}</td>
      <td>${tarea.prioridad}</td>
    `;

    tbody.appendChild(tr);
  });
}
