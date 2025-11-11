class Electrodomestico{
    #nombre
    #precio
    constructor(nombre,precio){
        this.#nombre=nombre
        this.#precio=precio
    }
    get nombre(){return this.#nombre}
    set nombre(v){this.#nombre=v}
    get precio(){return this.#precio}
    set precio(v){this.#precio=v}
}

class Televisor extends Electrodomestico{
    #pulgadas
    #fullhd
    constructor(nombre,precio,pulgadas,fullhd){
        super(nombre,precio)
        this.#pulgadas=pulgadas
        this.#fullhd=fullhd
    }
    get pulgadas(){return this.#pulgadas}
    set pulgadas(v){this.#pulgadas=v}
    get fullhd(){return this.#fullhd}
    set fullhd(v){this.#fullhd=v}
}

class Lavadora extends Electrodomestico{
    #carga
    constructor(nombre,precio,carga){
        super(nombre,precio)
        this.#carga=carga
    }
    get carga(){return this.#carga}
    set carga(v){this.#carga=v}
}

class StockProducto{
    #producto
    #unidades
    constructor(producto,unidades){
        this.#producto=producto
        this.#unidades=unidades
    }
    get producto(){return this.#producto}
    get unidades(){return this.#unidades}
    set unidades(v){this.#unidades=v}
}

class Almacen{
    #catalogo
    #stock
    constructor(){
        this.#catalogo=[]
        this.#stock=[]
    }
    altaCatalogo(prod){
        let existe=this.#catalogo.find(p=>p.nombre==prod.nombre)
        if(existe) return false
        this.#catalogo.push(prod)
        return true
    }
    entradaStock(nombre,uds){
        let p=this.#catalogo.find(x=>x.nombre==nombre)
        if(!p) return "No existe ese producto"
        let s=this.#stock.find(x=>x.producto.nombre==nombre)
        if(s) s.unidades+=uds
        else this.#stock.push(new StockProducto(p,uds))
        return "Total stock "+(s?s.unidades:uds)
    }
    salidaStock(nombre,uds){
        let s=this.#stock.find(x=>x.producto.nombre==nombre)
        if(!s) return "No existe ese producto o sin stock"
        s.unidades-=uds
        if(s.unidades<0) s.unidades=0
        return "Stock restante "+s.unidades
    }
    listadoCatalogo(){
        return this.#catalogo
    }
    listadoStock(){
        return this.#stock.filter(x=>x.unidades>0)
    }
    numTelevisoresStock(){
        return this.#stock.filter(x=>x.producto instanceof Televisor).length
    }
    numLavadorasStock(){
        return this.#stock.filter(x=>x.producto instanceof Lavadora).length
    }
    importeTotalStock(){
        let total=0
        for(let s of this.#stock){
            total+=s.producto.precio*s.unidades
        }
        return total
    }
}

let oAlmacen = new Almacen()