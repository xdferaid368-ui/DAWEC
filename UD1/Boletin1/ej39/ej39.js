let contador = 0;
let n = 2;

while (contador < 100) {
    let esPrimo = true;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }
    
    if (esPrimo) {
        console.log(n);
        contador++;
    }
    
    n++; 
}
