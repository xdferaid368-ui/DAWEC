// Esperamos a que cargue todo el HTML
window.onload = function () {

  // Seleccionamos todos los párrafos
  const elementos = document.querySelectorAll("p");

  // A cada elemento le añadimos un click
  elementos.forEach(elem => {
    elem.addEventListener("click", function () {

      // toggle:
      // si tiene la clase la quita
      // si no la tiene la pone
      this.classList.toggle("seleccionado");
    });
  });

  // Botón para mover
  document.getElementById("mover").addEventListener("click", function () {

    // Elementos seleccionados
    const seleccionados = document.querySelectorAll(".seleccionado");

    // Contenedor destino
    const destino = document.getElementById("c2");

    seleccionados.forEach(elem => {

      // Quitamos la selección
      elem.classList.remove("seleccionado");

      // append mueve el nodo (no lo copia)
      destino.append(elem);
    });
  });
};
