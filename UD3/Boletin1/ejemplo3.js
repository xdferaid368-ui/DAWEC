window.onload = function () {

  // Seleccionar / deseleccionar spans
  document.querySelectorAll("span").forEach(span => {
    span.addEventListener("click", function () {
      this.classList.toggle("sel");
    });
  });

  // Clonar
  document.getElementById("clonar").addEventListener("click", function () {

    const destino = document.getElementById("destino");
    const seleccionados = document.querySelectorAll(".sel");

    seleccionados.forEach(span => {

      // cloneNode(true) copia el nodo completo
      const clon = span.cloneNode(true);

      // Quitamos la clase al clon
      clon.classList.remove("sel");

      // Lo añadimos al destino
      destino.append(clon);

      // Quitamos selección al original
      span.classList.remove("sel");
    });
  });

  // Borrar
  document.getElementById("borrar").addEventListener("click", function () {

    const seleccionados = document.querySelectorAll(".sel");

    seleccionados.forEach(span => {
      span.remove();
    });
  });
};
