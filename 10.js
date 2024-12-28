// 10. Escriba un programa en JavaScript de un bucle que itere del 1 al 15. Para cada iteración, verifica si el número actual es impar o par, y muestra un mensaje en la pantalla.
// Ejm:
// Salida de muestra:
// " 1 es impar "
// " 2 es par " …
 
let i = 1
while( i < 16){
    (i % 2 == 0 ) ? console.log(i + " es par") : console.log(i + " es impar");
    i++;
}