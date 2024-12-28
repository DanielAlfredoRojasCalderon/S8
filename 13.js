// 13. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida, cuánto le costará en función del topping que elija.
// • El helado sin topping cuesta 50 MXN.
// • El topping de oreo cuesta 10 MXN.
// • El topping de KitKat cuesta 15 MXN.
// • El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le
// indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el
// precio del helado sin ningún topping.
let helado = prompt("Quiere un helado con Topping (S/N)");
let continuar = "S";
let tipoTopping = "";
let total = 0; 


if (helado == "S") {
    do{
        
        if (continuar == "S"){
    
            tipoTopping = prompt("¿Qué tipo de Topping desea?")
            switch (tipoTopping ){
            case "oreo": total += 10; continuar = prompt("Desea pedir algo más (S/N): "); break;
            case "KitKat": total += 15; continuar = prompt("Desea pedir algo más (S/N): ");  break;
            case "brownie": total += 20; continuar = prompt("Desea pedir algo más (S/N): ") ;break;
            default : console.log("Lo ingresado no es una opción, vuelva a ingresar su pedido");break;
            }
        }else{
            console.log("El costo de lo pedido es " + total + " MXN")
            break ;
        }

        
    
    }while(true)
}else{
    total = 50;
    console.log("El precio del helado sin topping es 50 MXN")

}



