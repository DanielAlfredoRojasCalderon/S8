// Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo, que permita determinar el bono que recibirá un trabajador.
let antiguedad  = 10; 

switch (antiguedad){
    case 1 : console.log("Su bono es de $100"); break;
    case 2 : console.log("Su bono es de $200"); break;
    case 3 : console.log("Su bono es de $300"); break;
    case 4 : console.log("Su bono es de $400"); break;
    case 5 : console.log("Su bono es de $500"); break;
    default : console.log("Su bono es de $1000"); break;

}