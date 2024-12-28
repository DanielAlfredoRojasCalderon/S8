//1. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
let  a = parseInt(prompt("Ingrese el primer número"));
let b = parseInt(prompt("Ingrese el segundo número"));
let c = parseInt(prompt("Ingrese el tercer número"));
let numeros = [a,b,c];
let k;
for(let i = 0 ; i < numeros.length; i++){
    (i == 0) ?  k = numeros[i] :  "";
    (numeros[i] >= k ) ? k = numeros[i] : "";
}
console.log("El mayor número es:",k)