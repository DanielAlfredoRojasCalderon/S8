// 9. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9 y, por último, “excelente” si es 10.
let a = 12;
if ( a >= 1 && a <= 10){
    if (a < 6 ) {
        console.log("Reprobado")
    }else if (a >= 6 && a <= 8){
        console.log("Regular")
    }else if (a == 9){
        console.log("Regular")
    }else if (a == 10){
        console.log("Excelente")
    }
}else {
    console.log("No está en el rango")
}