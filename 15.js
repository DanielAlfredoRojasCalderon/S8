// 15. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total.
// Considere:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
let kRecorrido  = 200;
let tipoCoche = "moto";
let total = 0;
switch(tipoCoche){
    case "coche" :  total = 0.2 * kRecorrido ; break;
    case "moto" :  total = 0.1 * kRecorrido; break;
    case "autobús" :  total = 0.5 * kRecorrido ; break;
}
(kRecorrido > 0 && kRecorrido <=100) ?  total += 5 : total += 10 ;
console.log("Total a pagar " + total)