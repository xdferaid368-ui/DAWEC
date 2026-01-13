// A partir del objeto indicado más abajo, crea un nuevo objeto nuevoEstado que sobrescriba loading a false y mantenga el resto de propiedades igual, 
// sin modificar el objeto original.
// 	const estado = { loading: true, error: null, data: [45,53,23] }
const estado = { loading: true, error: null, data: [45,53,23] }

const nuevoEstado = {
    ...estado,
    loading: false,
}

console.log(estado.loading)
console.log(nuevoEstado.loading)
console.log(estado)
console.log(nuevoEstado)