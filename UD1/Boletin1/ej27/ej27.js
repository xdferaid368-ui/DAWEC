let aprobados = 0;
let suspensos = 0;
let nota;
for (let i = 1; i <= 5; i++){
    nota = Number(prompt('Introduce el valor número ' + i + ':'));
    if(nota >= 7 ){
        aprobados++
    }
    else{
        suspensos++
    }
}
alert('Han aprobado un total de : ' + aprobados);
alert('Han suspendido un total de :' + suspensos)