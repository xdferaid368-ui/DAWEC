class Producto {
    _nombre;
    _precio;
    _unidades;
    constructor(nombre, precio){
        this._nombre=nombre
        this._precio=precio
        this._unidades= 0;
    }
    get unidades() {
        return this._unidades;
    }
    set unidades(value) {
        if(value >= 0){
            this._unidades = value;
        }
        else{
        this._unidades = 0;
        }
    }
    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = Math.abs(value);
    }
    
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    valorEnStock(){
        return this._unidades * this._precio;
    }
    incrementarStock(){
        this._unidades += cantidad;
    }
    disminuirStock(){
        this._unidades -= cantidad;
        if(this._unidades < 0 ) this._unidades = 0;
    }