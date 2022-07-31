/*Escriba un programa que use el console.log para imprimir todos los números del 1 al 100, 
con dos exepciones. Para los números divisibles por 3, 
imprima "Fizz" en lugar del número, y para los números divisibles por 5(y no por 3), 
imprima "Buzz" en su lugar. Cuando tenga eso funcionando, modifique su programa para imprimir 
"FizzBuzz", para los números que sean divisibles por 3 y 5(y aún así iimprima "Fizz" o "Buzz")
 para los números divisibles por solo uno de ellos.*/

function FizzBuzz() {
  for (let index = 1; index <= 100; index++) {
    var result = "";
    if (index % 3 == 0) {
      result += "Fizz";
    }
    if (index % 5 == 0) {
      result += "Buzz";
    }
    console.log(result || index);
  }
}
FizzBuzz();
