/* Solicitar a través de un formulario dos horas de un día, el sistema deberá mostrar en una capa de salida del documento si la primera hora 
es anterior o posterior a la segunda, además del tiempo transcurrido entre ambas en formato de hh:mm. 
Ejemplo: el usuario introduce en la primera hora 18:40 y en la segunda 22:25 de la siguiente forma, h1=18 m1=40 h2=22 m2=25.
La salida del sistema será “H1 es anterior a H2. 
Han pasado 3 horas y 45 minutos”. Si necesitara truncar un número puede usar la función Math.floor(num). */


function compararHoras(){
    let h1 = Number(document.getElementById('h1').value);
    let m1 = Number(document.getElementById('m1').value);
    let h2 = Number(document.getElementById('h2').value);
    let m2 = Number(document.getElementById('m2').value);
    let total1 = h1 * 60 + m1
    let total2 = h2 * 60 + m2
    if (h1<h2){
        document.getElementById('salida').innerHTML = 'H1 es anterior a H2'
        let diferencia = total2 - total1
        let horas = Math.floor(diferencia/60)
        let minutos = diferencia%60
        document.getElementById('salida2').innerHTML = 'La diferencia es de ' + horas + ' horas y ' + minutos;
        
    }
    else if (h2<h1){
        document.getElementById('salida').innerHTML = 'H2 es anterior a H1'
        let diferencia = total1 - total2
        let horas = Math.floor(diferencia/60)
        let minutos = diferencia%60
        document.getElementById('salida2').innerHTML = 'La diferencia es de ' + horas + ' horas y ' + minutos;
    }
    else if(h1 == h2){
        if (m1<m2){
            document.getElementById('salida').innerHTML = 'H1 es anterior a H2'
        }
        else{
            document.getElementById('salida').innerHTML = 'H2 es anterior a H1'
        }
    }
   
    
}

