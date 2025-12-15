const comerciales = [
  "Carmen Gómez",
  "Lucía Gil",
  "Andrés Martínez",
  "Antonio Salinas",
];

const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];
const categorias = ["Aceite", "Encurtidos", "Salsas"];

const catalogo = new Catalogo();
const gestor = new Gestor();

function cargaDatosIniciales() {
  catalogo.addProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.addProducto(
    2,
    "Aceite Oliva Virgen Extra 700ml (Caja 30)",
    208.5,
    0
  );
  catalogo.addProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.addProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.addProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.addProducto(
    6,
    "Aceituna Gordal deshuesada 350gr (Caja de 50)",
    205.45,
    1
  );
  catalogo.addProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.addProducto(
    8,
    "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)",
    141.35,
    1
  );
  catalogo.addProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.addProducto(
    10,
    "Aceituna Negra deshuesada 350gr (Caja de 50)",
    99.35,
    1
  );
  catalogo.addProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.addProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.addProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.addProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.addProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.addProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);
}

cargaDatosIniciales();

categorias.forEach(nombre => gestor.addCategoria(nombre));
comerciales.forEach((nombreComercial, i) => {
  gestor.addComercial(nombreComercial);
  clientes[i].forEach(nombreCliente => gestor.addCliente(i, nombreCliente));
});

gestor.setComercialActual(0);
let clienteActual = gestor.getClientesComercialActual()[0];

const panelClientes = document.getElementById("clientes");
const selectComerciales = document.forms.frmComercial.comerciales;
const selectCategorias = document.forms.frmControles.categorias;
const selectProductos = document.forms.frmControles.productos;
const panelPedido = document.getElementById("pedido");

gestor.comerciales.forEach((nombre, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = nombre;
  selectComerciales.appendChild(option);
});

gestor.categorias.forEach((nombre, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = nombre;
  selectCategorias.appendChild(option);
});

function cargarProductosPorCategoria(idCategoria) {
  selectProductos.innerHTML = "";
  catalogo.productos
    .filter(producto => producto.idCategoria === idCategoria)
    .forEach(producto => {
      const option = document.createElement("option");
      option.value = producto.idProducto;
      option.textContent = `${producto.nombreProducto} - ${producto.precioUnidad}€`;
      selectProductos.appendChild(option);
    });
}
selectCategorias.addEventListener("change", e => cargarProductosPorCategoria(parseInt(e.target.value)));
cargarProductosPorCategoria(0);

function pintarClientes() {
  const antiguos = panelClientes.querySelectorAll(".cliente");
  antiguos.forEach(c => c.remove());
  const listaClientes = gestor.getClientesComercialActual();
  listaClientes.forEach((cliente, index) => {
    const div = document.createElement("div");
    div.textContent = cliente.nombre;
    div.classList.add("cliente");
    div.classList.remove("pendiente","pagado");
    div.classList.add(cliente.cuentaAbierta ? "pendiente" : "pagado");
    if(index === 0) div.style.fontWeight = "bold";
    panelClientes.appendChild(div);
  });
}

function mostrarPedido() {
  const cliente = gestor.getClientesComercialActual()[0];
  panelPedido.innerHTML = "";
  if(cliente.pedido.length === 0) return;
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = "<tr><th>ID</th><th>Unidades</th><th>Nombre</th><th>Precio Unit.</th><th>Total</th></tr>";
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  cliente.pedido.forEach(linea => {
    const prod = catalogo.productos.find(p => p.idProducto === linea.idProducto);
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${prod.idProducto}</td><td>${linea.unidades}</td><td>${prod.nombreProducto}</td><td>${prod.precioUnidad}</td><td>${(prod.precioUnidad*linea.unidades).toFixed(2)}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  panelPedido.appendChild(table);
  const btn = document.createElement("button");
  btn.textContent = "PEDIDO ENVIADO Y COBRADO";
  btn.classList.add("boton");
  btn.addEventListener("click", () => {
    cliente.pedido = [];
    cliente.cuentaAbierta = false;
    pintarClientes();
    mostrarPedido();
  });
  panelPedido.appendChild(btn);
}

function añadirLineaPedido(idProducto, unidades) {
  const cliente = gestor.getClientesComercialActual()[0];
  cliente.pedido.push(new LineaPedido(idProducto, unidades));
  cliente.cuentaAbierta = true;
  pintarClientes();
  mostrarPedido();
}

document.querySelectorAll(".tecla").forEach(tecla => {
  tecla.addEventListener("click", () => {
    const unidades = parseInt(tecla.value);
    const productoSeleccionado = parseInt(selectProductos.value);
    if(!isNaN(productoSeleccionado)) añadirLineaPedido(productoSeleccionado, unidades);
  });
});

pintarClientes();
mostrarPedido();