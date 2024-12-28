// 12. Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz".

for(let i = 1 ; i < 101 ;  i++){
    (i % 3 == 0 && i % 5 != 0) 
    ? console.log("Fizz") 
    : (i % 5 == 0 && i % 3 != 0)
    ? console.log("Buzz")
    :(i % 15 == 0)
    ? console.log("FizzBuzz") 
    : console.log(i) 
}