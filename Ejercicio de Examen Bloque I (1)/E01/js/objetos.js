"use strict";

// Clase Vivero
class Vivero {
    constructor() {
        this.arboles = []; // Array para guardar todos los árboles
    }

    // Dar de alta un árbol
    altaArbol(arbol) {
        for (let i = 0; i < this.arboles.length; i++) {
            if (this.arboles[i].codigo === arbol.codigo) {
                return false; // Ya existe
            }
        }
        this.arboles.push(arbol);
        return true; // Registrado correctamente
    }

    // Actualizar tallaje de un árbol
    actualizarTallaje(codigo, nuevaTalla) {
        for (let i = 0; i < this.arboles.length; i++) {
            if (this.arboles[i].codigo === codigo) {
                if (nuevaTalla <= this.arboles[i].tallaje) {
                    return "Tallaje inferior al registrado";
                } else {
                    this.arboles[i].tallaje = nuevaTalla;
                    if (this.arboles[i] instanceof Perenne) return "Correcto, tallaje actualizado Perenne";
                    else return "Correcto, tallaje actualizado Caduco";
                }
            }
        }
        return "Árbol no registrado";
    }

    // Listado de perennes por altura mínima
    listadoPerennes(minAltura) {
        let resultado = [];
        for (let i = 0; i < this.arboles.length; i++) {
            if (this.arboles[i] instanceof Perenne && this.arboles[i].tallaje >= minAltura) {
                resultado.push(this.arboles[i]);
            }
        }
        // Orden descendente por tallaje
        resultado.sort(function(a,b){ return b.tallaje - a.tallaje; });
        return resultado;
    }

    // Listado de caducos por mes de floración
    listadoCaducos(mes) {
        let resultado = [];
        for (let i = 0; i < this.arboles.length; i++) {
            if (this.arboles[i] instanceof Caduco && this.arboles[i].mesFloracion.toLowerCase() === mes.toLowerCase()) {
                resultado.push(this.arboles[i]);
            }
        }
        return resultado;
    }

    // Total árboles a la venta
    totalArbolesVenta() {
        let total = 0;
        for (let i = 0; i < this.arboles.length; i++) {
            let a = this.arboles[i];
            if (a instanceof Caduco && a.tallaje > 100) total++;
            else if (a instanceof Perenne && a.frutal && a.tallaje > 80) total++;
            else if (a instanceof Perenne && !a.frutal && a.tallaje > 120) total++;
        }
        return total;
    }
}

// Clase base Árbol
function Arbol(codigo, tallaje, especie) {
    this.codigo = codigo;
    this.tallaje = tallaje;
    this.especie = especie;
}

// Árbol Perenne
function Perenne(codigo, tallaje, especie, frutal) {
    Arbol.call(this, codigo, tallaje, especie);
    this.frutal = frutal; // true o false
}
Perenne.prototype = Object.create(Arbol.prototype);
Perenne.prototype.constructor = Perenne;

// Árbol Caduco
function Caduco(codigo, tallaje, especie, mesFloracion) {
    Arbol.call(this, codigo, tallaje, especie);
    this.mesFloracion = mesFloracion; // string del mes
}
Caduco.prototype = Object.create(Arbol.prototype);
Caduco.prototype.constructor = Caduco;