// Crea una función que reciba un objeto usuario (con nombre e imagen) y devuelva por consola un string que simule una tarjeta HTML usando Template Literals. 
// Ejemplo de tarjeta HTML:
//     <div class="card">
//         <img src="pepeGomez.jpg" alt="Pepe Gómez" />
//         <h2>Pepe Gómez</h2>
//   </div>

let usuario = {
    nombre: "Pepe Gomez",
    imagen: "pepeGomez.jpg",
}

const tarjeta= `
<div class="card">
  <img src="${usuario.imagen}" alt="${usuario.nombre}" />
  <h2>${usuario.nombre}</h2>
</div>
`
console.log(tarjeta);

