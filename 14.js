// 14. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// • Course: $4999 MXN
// • Carrera $3999 MXN
// • Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// • Beca Facebook: 20% de descuento.
// • Beca Google: 15% de descuento.
// • Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// • Course: 2 meses
// • Carrera 6 meses
// • Master: 12 meses

let curso = prompt("Ingrese el curso que llevará");
let total = 0;
let tiempo = 0;
switch (curso){
    case "Course":  total = 4999; tiempo = 2; break;
    case "Carrera": total = 3999; tiempo = 6; break;
    case "Master":  total = 2999; tiempo = 12;  break;
}

let descuento = prompt("Ingrese el tipo de cupón de descuento: ");

switch (descuento){
    case "Facebook":  total *= 0.2 ;  console.log(`El pago mensual con descuento es ${total} y el pago total por el curso es de ${(total * tiempo).toFixed(2)}`); break;
    case "Google": total *= 0.15 ; console.log(`El pago mensual con descuento es ${total} y el pago total por el curso es de ${(total * tiempo).toFixed(2)}`); break;
    case "Jesua":  total *= 0.5 ; console.log(`El pago mensual con descuento es ${total} y el pago total por el curso es de ${(total * tiempo).toFixed(2)}`);break;
}
