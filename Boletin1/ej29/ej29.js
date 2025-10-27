/* En una empresa trabajan 5 empleados cuyos sueldos oscilan entre 100 y 500 euros. 
Realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre 100 y 300 euros y cuántos cobran más de 300.
Además, el programa deberá informar el importe que gasta la empresa en sueldos al personal. */
let sueldo;
let sueldomeno = 0;
let sueldomayo = 0;
let presupuesto = 0;
for (let i = 1; i <= 5; i++){
    sueldo = Number(prompt('Introduce el sueldo  ' + i + ':'));
    presupuesto += sueldo;
    if(sueldo>=100 && sueldo<= 300){
        sueldomeno++
    }
    else if (sueldo>300){
        sueldomayo++
    }
}
alert('Hay '+ sueldomeno + '  empleados que cobran entre 100 y 300 euros');
alert('Hay '+ sueldomayo + '  empleados que cobran mas de 300 euros');
alert('La empresa gasta ' + presupuesto + '$ en sueldos');