window.onload = function () {

  document.getElementById("add").addEventListener("click", function () {

    // Cogemos los valores
    const texto = document.getElementById("texto").value;
    const prioridad = document.getElementById("prioridad").value;
    const lista = document.getElementById("lista");

    // Creamos el li
    const li = document.createElement("li");
    li.textContent = texto;

    // Guardamos la prioridad como atributo data
    li.dataset.prioridad = prioridad;

    // Lo añadimos a la lista
    lista.append(li);

    // Reordenamos la lista
    // Convertimos los hijos en array
    const items = Array.from(lista.children);

    // Ordenamos por prioridad
    items.sort((a, b) => {
      return a.dataset.prioridad - b.dataset.prioridad;
    });

    // Volvemos a meterlos en orden
    items.forEach(item => lista.append(item));
  });
};
