

/*patrones de diseño     

patrones basicos, patrones modulares, 
patrones extructurados, patrones de comportamiento
y patrones de mensajeria 


Christopher Alexander
"Cada patrón describe un problema que ocurre una y otra vez en nuestro entorno, y luego describe el núcleo de la solución a ese problema, de tal manera que se puedes usar esta solución un millón de veces, sin hacerlo de la misma froma dos veces"

Fue popularizado por la editorial de Gang of Four(GO4)

los patrones de diseño se creron para solucionar problemas 
y ser reutilizable, además de entregar una respuesta predecible, se veneficia de una interfaz mas limpia y documentasión mejor 


Singleton
"Son objetos que solo pueden tener una única  instancia: una única fuente de verdad como un único punto de acesso"


Builder
"Comprende el requisito en la expresión más fácil y lo traduce en el resultado, utilizando varios procesos internos complejos"

Factory
"Es dfinido como una interfaz para crear un onjeto que permite a las subclases decidir qué clase instancear. Este patrón también se conoce como el patrón de contructor virtual"


                javascript
NO es asíincrono
multiparadigma 
-orientado a objetos pero no tanto, más bien es prototipado
-iperativo y estructurado
tipado débil*/


/*+++++++++++++++++tipos, valores y operadores+++++++++++++++
Tipos: son daatos que se pueden almacenar en la memoría.
Valores: Son valores que se puden almacenar los tipos de datos.
Opereadores:Son los elementos de un programa que sirven para asignar o producir un nuevo valor.*/

//variables locales y globales 
// locales son aquellas que se colocan dentro de una función
//globales son las que se colocn dentro del archivo


//1- Numbers
10, -25, 0.25, NaN, Infinity, 
//(+, -, *, /, %)
//(+, -, *, /) num += num1;

//2- Strings
["texto", 'texto']

//3-Booleans
(true, false)
//(&&,|| <,>, <=, >=, ==, !=)
//(===)// valida que sean iguales y del mismo tipo

//4-Objects
var objeto ={key: value} // dentro de las valor tambien se pueden agregar funciones con o sin objetos o algo asi 

//5-Functions
function myFuction(/*valores*/){/*codigo*/}
const myAge = (function(age){return age})(22) //esta encapsulado

function registro(num1, num2, num3){

argument.length// muestra los argumentos de la funcion ya que es un objeto 
}

//6-Valor indefinido
(undefined, null);

//7-Más
(typeof num1) //devuelve tipo de valor ya sea un number, string, object o fuction

//8- condicionales 
if (condition) {}
switch (key) {
    case value:
        
        break;

    default:
        break;
}
// '', -0, null, 0 son falsos en condicional

//9- coerción o casting
var n = '22'
var nn = Number(n)

/*conversiones explicitas*/
var foo = '500';
var bar =parseInt(foo)
var boo = bar.toString()

/*tipos de conversiones implicitas*/
var f = 1 - '22';  //retorna 21 //el menos tiene una esepción y hace la coerción
var f = 1 + '22';//retorna '122'

10- ternario
(validación)? true: false;

11- bucles 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    } 
while (condition) {} 
do {} while (condition); 

//12-objeto prototype

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
    console.log(result || index)
  }
}
FizzBuzz();


/*13-hoisting
 almacena las valribles en memoria y las funciones, en la segunda ves ejecuta todad las funciones y los console.log

valor y referencia, dos variables que alojan el mismo contenido tienen un espacio en memeria diferente */

