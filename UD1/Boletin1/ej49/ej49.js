function calcularDiaSiguiente(){
    const dia = Number(document.getElementById('dia').value);
    const mes = Number(document.getElementById('mes').value);
    const anio = Number(document.getElementById('anio').value);

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        document.getElementById('salida').innerHTML = 'Opción imposible macho';
        return;
    }

    let diasiguiente = dia + 1;
    let messiguiente = mes;
    let aniosiguiente = anio;

    // Ajuste simplificado de febrero
    if (mes === 2 && diasiguiente > 28) {
        diasiguiente = 1;
        messiguiente += 1;
    }

    // Ajuste para meses con máximo 31 días
    if (diasiguiente > 31) {
        diasiguiente = 1;
        messiguiente += 1;
    }

    // Ajuste de cambio de año
    if (messiguiente > 12) {
        messiguiente = 1;
        aniosiguiente += 1;
    }

    document.getElementById('salida').innerHTML =
        "El día siguiente es: " + diasiguiente + "/" + messiguiente + "/" + aniosiguiente;
}
