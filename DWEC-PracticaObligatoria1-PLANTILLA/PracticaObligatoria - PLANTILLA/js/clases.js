class Producto {
  constructor(idProducto, nombreProducto, precioUnidad, idCategoria) {
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.precioUnidad = precioUnidad;
    this.idCategoria = idCategoria;
  }
}

class Catalogo {
  constructor() {
    this.productos = [];
  }
  addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
    this.productos.push(new Producto(idProducto, nombreProducto, precioUnidad, idCategoria));
  }
}

class LineaPedido {
  constructor(idProducto, unidades) {
    this.idProducto = idProducto;
    this.unidades = unidades;
  }
}

class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentaAbierta = false;
    this.pedido = [];
  }
}

class Gestor {
  constructor() {
    this.categorias = [];
    this.comerciales = [];
    this.clientes = [];
    this.comercialActual = 0;
  }
  addCategoria(nombreCategoria) { this.categorias.push(nombreCategoria); }
  addComercial(nombreComercial) { this.comerciales.push(nombreComercial); this.clientes.push([]); }
  addCliente(idComercial, nombreCliente) { this.clientes[idComercial].push(new Cliente(nombreCliente)); }
  setComercialActual(indice) { this.comercialActual = indice; }
  getClientesComercialActual() { return this.clientes[this.comercialActual]; }
}