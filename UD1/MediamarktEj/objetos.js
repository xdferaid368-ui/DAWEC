    "use strict";

    // ---------- CLASES BASE ----------

    // Producto
    function Producto(codigo, precio, nombre, categoria) {
        this.codigo = codigo
        this.precio = precio
        this.nombre = nombre
        this.categoria = categoria

    // TODO: atributos y constructor
    // TODO: método getDatos()
    }
    Producto.prototype.getDatos = function(){
            return "Codigo " + this.codigo + 'Nombre ' + this.nombre + 'Precio : ' + this.precio + 'Categoria: ' + this.categoria;  
        }

    // Televisor
function Televisor(codigo, precio, nombre, pulgadas, smart) {
    // Hereda los atributos de Producto
    Producto.call(this, codigo, precio, nombre, 'Televisor');
    
    // Añade los suyos propios
    this.pulgadas = pulgadas;
    this.smart = smart;
}

// Hacemos que herede los métodos de Producto
Televisor.prototype = Object.create(Producto.prototype);
Televisor.prototype.constructor = Televisor;

// Añadimos el método getDatos fuera
Televisor.prototype.getDatos = function() {
    // Llamamos al getDatos del padre
    let datosBase = Producto.prototype.getDatos.call(this);
    
    // Le añadimos los datos extra del televisor
    return datosBase + ", Pulgadas: " + this.pulgadas + ", Smart: " + (this.smart ? "Sí" : "No");
};

// Movil
function Movil(codigo, precio, nombre, almacenamiento, sistema) {
    // Hereda de Producto
    Producto.call(this, codigo, precio, nombre, 'Movil');
    
    // Añade sus propios atributos
    this.almacenamiento = almacenamiento;
    this.sistema = sistema;
}

// Hereda los métodos de Producto
Movil.prototype = Object.create(Producto.prototype);
Movil.prototype.constructor = Movil;

// Añade su propio método getDatos
Movil.prototype.getDatos = function() {
    // Llamamos al getDatos del padre
    let datosBase = Producto.prototype.getDatos.call(this);
    
    // Y le añadimos lo propio de móvil
    return datosBase + ", Almacenamiento: " + this.almacenamiento + "GB, Sistema: " + this.sistema;
};

    // ---------- CLASE MEDIAMARKT ----------
    class MediaMarkt {
    constructor() {
        this.aProductos = [];
    }

    buscarProducto(codigo) {
        // TODO: devolver producto con ese código o undefined
        let producto = this.aProductos.find(p => p.codigo == codigo)

        return producto;

    }

    altaProducto(oProducto) {
        if(this.buscarProducto(oProducto.codigo)){
            alert('El producto ya existe')
        return false
            }
        else{
            this.aProductos.push(oProducto)
                alert('Producto Añadido')
            return true
        }
        // TODO: comprobar si ya existe y añadir si no
    }

    actualizarPrecio(codigo, nuevoPrecio) { 
        let productoencontrado = this.buscarProducto(codigo)
        if(productoencontrado){
            productoencontrado.precio = nuevoPrecio
        }
        else{
            alert('Producto invalido')
        }
        // TODO: buscar producto y actualizar si procede
    }

listadoTelevisores(minPulgadas) {
    // Filtrar los televisores
    let televisoresFiltrados = [];
    for (let i = 0; i < this.aProductos.length; i++) {
        let p = this.aProductos[i];
        if (p.categoria === "Televisor" && p.pulgadas >= minPulgadas) {
            televisoresFiltrados.push(p);
        }
    }

    // Construir tabla HTML
    let tabla = "<table border='1'>";
    tabla += "<tr><th>Código</th><th>Nombre</th><th>Precio</th><th>Pulgadas</th><th>Smart</th></tr>";

    for (let i = 0; i < televisoresFiltrados.length; i++) {
        let tv = televisoresFiltrados[i];
        tabla += "<tr>";
        tabla += "<td>" + tv.codigo + "</td>";
        tabla += "<td>" + tv.nombre + "</td>";
        tabla += "<td>" + tv.precio + "</td>";
        tabla += "<td>" + tv.pulgadas + "</td>";
        tabla += "<td>" + (tv.smart ? "Sí" : "No") + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";

    return tabla;
}

    listadoMoviles(sistema) {
        // Filtrar los televisores
    let MovilesFiltrados = [];
    for (let i = 0; i < this.aProductos.length; i++) {
        let p = this.aProductos[i];
        if (p.categoria === "Movil" && p.sistema == sistema) {
            MovilesFiltrados.push(p);
        }
    }
        let tabla = "<table border='1'>";
    tabla += "<tr><th>Código</th><th>Nombre</th><th>Precio</th><th>Almacenamiento</th><th>Sistema</th></tr>";

    for (let i = 0; i < MovilesFiltrados.length; i++) {
        let m = MovilesFiltrados[i];
        tabla += "<tr>";
        tabla += "<td>" + m.codigo + "</td>";
        tabla += "<td>" + m.nombre + "</td>";
        tabla += "<td>" + m.precio + "</td>";
        tabla += "<td>" + m.almacenamiento + "</td>";
        tabla += "<td>" + m.sistema + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";

    return tabla;
}
    

    totalProductosPremium() {
        let totalProductosPremium = 0
        for(let i = 0; i < this.aProductos.length;i++){
            let producto = this.aProductos[i]
            if(producto.categoria === 'Televisor' && producto.smart === true && producto.pulgadas > 50){
                totalProductosPremium++
            }
            else if(producto.categoria === 'Movil' && producto.almacenamiento > 256 && producto.sistema === 'iOS'){
                totalProductosPremium++
            }
        }
    return totalProductosPremium;
     // TODO: contar productos premium (TV Smart > 50", iOS > 256 GB)
    }
}
