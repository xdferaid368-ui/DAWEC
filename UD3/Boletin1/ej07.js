//A partir del documento HTML proporcionado para este ejercicio, generar el script necesario para que al pulsar dentro de la tabla, 
// la fila donde se haya hecho click con el cursor se desplazará un lugar hacia arriba dentro de la tabla.

const tbody = document.querySelector("table tbody");

tbody.addEventListener('click', function(evento){
    const fila = evento.target.closest("tr");
if (fila && fila.previousElementSibling){
    tbody.insertBefore(fila, fila.previousElementSibling);
}
})