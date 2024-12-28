// 11. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta al 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
// Ejm:
// Primer número: 2
// Segundo número: 5
// Salida de muestra:
let primer = 2 ;
let segundo = 8;
for(let i = 1 ; i < 51; i++){
    (i == primer || i == segundo) ? console.log("Lotería!") : console.log(i)
}