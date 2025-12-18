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

gestor.comerciales = comerciales;
gestor.categorias = categorias;
gestor.comercialActual = 0;
gestor.clienteActual = 0;

gestor.clientes = [];
gestor.pedidos = [];

for (let i = 0; i < clientes.length; i++) {
  gestor.clientes[i] = [];
  gestor.pedidos[i] = [];
  for (let j = 0; j < clientes[i].length; j++) {
    gestor.clientes[i][j] = new Cliente(clientes[i][j]);
    gestor.pedidos[i][j] = [];
  }
}

const selComerciales = document.frmComercial.comerciales;
const selCategorias = document.frmControles.categorias;
const selProductos = document.frmControles.productos;
const panelClientes = document.getElementById("clientes");
const panelPedido = document.getElementById("pedido");
const teclas = document.querySelectorAll(".tecla");

function cargarComerciales() {
  selComerciales.innerHTML = "";
  for (let i = 0; i < gestor.comerciales.length; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = gestor.comerciales[i];
    selComerciales.appendChild(opt);
  }
}

function cargarCategorias() {
  selCategorias.innerHTML = "";
  for (let i = 0; i < gestor.categorias.length; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = gestor.categorias[i];
    selCategorias.appendChild(opt);
  }
}

function cargarProductos() {
  selProductos.innerHTML = "";
  let cat = selCategorias.value;
  for (let p of catalogo.productos) {
    if (p.idCategoria == cat) {
      let opt = document.createElement("option");
      opt.value = p.idProducto;
      opt.textContent = p.nombreProducto;
      selProductos.appendChild(opt);
    }
  }
}

function pintarClientes() {
  let divs = panelClientes.querySelectorAll(".cliente");
  divs.forEach(d => d.remove());

  let lista = gestor.clientes[gestor.comercialActual];

  for (let i = 0; i < lista.length; i++) {
    let div = document.createElement("div");
    div.textContent = lista[i].nombre;
    div.className = "cliente " + (lista[i].cuentaAbierta ? "pendiente" : "pagado");
    div.onclick = function () {
      gestor.clienteActual = i;
      pintarClientes();
      pintarPedido();
    };
    panelClientes.appendChild(div);
  }
}

function pintarPedido() {
  panelPedido.innerHTML = "";
  let cliente = gestor.clientes[gestor.comercialActual][gestor.clienteActual];
  let pedido = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];

  let h = document.createElement("h3");
  h.textContent = cliente.nombre;
  panelPedido.appendChild(h);

  if (pedido.length == 0) return;

  let total = 0;

  for (let i = 0; i < pedido.length; i++) {
    let prod = catalogo.productos.find(p => p.idProducto == pedido[i].idProducto);
    let div = document.createElement("div");
    let importe = prod.precioUnidad * pedido[i].unidades;
    total += importe;

    let btnMas = document.createElement("button");
    btnMas.textContent = "+";
    btnMas.onclick = function () {
      pedido[i].unidades++;
      pintarPedido();
    };

    let btnMenos = document.createElement("button");
    btnMenos.textContent = "-";
    btnMenos.onclick = function () {
      if (pedido[i].unidades == 1) {
        if (confirm("Eliminar producto")) {
          pedido.splice(i, 1);
          if (pedido.length == 0) cliente.cuentaAbierta = false;
        }
      } else {
        pedido[i].unidades--;
      }
      pintarClientes();
      pintarPedido();
    };

    div.textContent = prod.nombreProducto + " x " + pedido[i].unidades + " = " + importe.toFixed(2);
    div.appendChild(btnMas);
    div.appendChild(btnMenos);
    panelPedido.appendChild(div);
  }

  let t = document.createElement("h3");
  t.textContent = "Total: " + total.toFixed(2);
  panelPedido.appendChild(t);

  let fin = document.createElement("button");
  fin.textContent = "PEDIDO ENVIADO Y COBRADO";
  fin.onclick = function () {
    pedido.length = 0;
    cliente.cuentaAbierta = false;
    pintarClientes();
    pintarPedido();
  };
  panelPedido.appendChild(fin);
}

selComerciales.onchange = function () {
  gestor.comercialActual = this.value;
  gestor.clienteActual = 0;
  pintarClientes();
  pintarPedido();
};

selCategorias.onchange = cargarProductos;

teclas.forEach(t => {
  t.onclick = function () {
    let unidades = parseInt(this.value);
    let idProd = parseInt(selProductos.value);
    let pedido = gestor.pedidos[gestor.comercialActual][gestor.clienteActual];
    let cliente = gestor.clientes[gestor.comercialActual][gestor.clienteActual];

    for (let l of pedido) {
      if (l.idProducto == idProd) {
        alert("Producto ya añadido");
        return;
      }
    }

    pedido.push(new LineaPedido(unidades, idProd));
    cliente.cuentaAbierta = true;
    pintarClientes();
    pintarPedido();
  };
});

cargarComerciales();
cargarCategorias();
cargarProductos();
pintarClientes();
pintarPedido();
