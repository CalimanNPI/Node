/*colecciones*/
//dentro de este se pueden agregar cualquier tipo de valor en la key y en el valor, ya sea una funcion o otra cosa

const map = new Map();

//en este comprueva si un valor exixte dentro de este  ya que los valores deben ser unicos. y se pueden eliminar por su valor
const set = new Set();

//array.form
/** crea una instancia atravez de un objeto iterable como: string, array */
const name = "carlos";
const nums = [1, 2, 3, 4, 5];

const array = Array.from(nums, (e) => e * 2);
 name = Array.from(name);

console.log(array, name);

//Array.isArray valida si es una instancia de array

console.log(Array.isArray(nums)); // true
console.log(Array.isArray(name)); // false
console.log(nums instanceof Array); // true

//Array.of crea un nuevo array con el mumero de elementos pasados sin importar el valor o el numero
 newArray = Array.of(1, 2, 3, 4, 5, 6);
console.log(newArray);

const newArray = Array.of(null, undefined);
console.log(newArray);

//Array.concat une dos arrays en uno solo
const array1 = ["A", "B"];
const array2 = ["C", "D"];
const array3 = array1.concat(array2);
const arraySpread = [...array1, ...array2];
console.log(array3, arraySpread);

//Array.entries  itera el array de forma manual
const iterator = array1.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);

//Array.every valida si todos los elementos del array pasan una condicion
console.log(nums.every((e) => e < 6)); //true
console.log(nums.every((e) => e < 4)); //false

//Array.find buesca dentro del array y devuelve el primer valor que cumpla con la condicion
 numbers = [0.6, 10, 3, 6, 5, 9, 18, 4];

console.log(numbers.find((e) => e > 10)); // devuelve 18

//Array.filter devuelve un arrar nuevo,  filtra los diferentes elementos que posee el array dependiendo de una condicion dada
console.log(numbers.filter((e) => e > 8)); //devuelve [ 10, 9, 18];

//Array.forEach recorre el arreglo  y recibe 3 parametros  en el callBack

numbers.forEach((value, index, array) => {
  console.log(value, index, array); //devuelve 0.6 0 [el contenido del array]
});

//Array.includes verifica si un elemento existe en la coleccion del array
 animal = { name: "Bobby" };
 animals = ["dog", "cat", "cow", "fox", animal];
console.log(animals.includes("dog")); //true
console.log(animals.includes("horse")); //false

//animal ocuma el mismo tamaño en memoria y por eso da un true
console.log(animals.includes(animal)); //true
//ocupa un tamaño diferente en memoria por eso da un false
 animals = ["dog", "cat", "cow", "fox", { name: "Bobby" }];
console.log(animals.includes({ name: "Bobby" })); //false

//Array.join devuelve una cadena de texto con los eleemntos separados por una coma, o se puede definir ese separador
const animals = ["dog", "cat", "cow", "fox"];

console.log(animals.join()); //devuelve "dog, cat, cow, fox"
console.log(animals.join("--")); //devuelve "dog--cat--cow--fox"

//Array.indexOf busca dentro de array si existe un elemento
console.log(animals.indexOf("cat")); //devuelve  => 1
console.log(animals.indexOf("horse")); //devuelve  => -1 haciendo referencia a que no existe el elemento

//Array.map  callback recibe instrcciones para editar los elementos de un array
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const impars = numbers.map((value, index, array) => {
  value + 1;
}); //devuelve [3,5,7,9,11,,13,15,,17,19,21]

//Array.some valida que varios elementos de una collecion cumplan con una condicion especifica

console.log(numbers.some((value, index, array) => value > 16)); // true
console.log(numbers.some((value, index, array) => value > 20)); // false

//Array.reduce

function sum(...args) {
  //...args hacn referencia a un array
  return args.reduce((prev, next) => {
    prev + next;
  }, 0); // es el valor por defecto en caso que no sele pase algun argumento
}

console.log(sum(1, 2, 3, 4, 5, 6)); //devuelve 21

/*********** Objetos ***********************/

 dog = {
  name: "Tom",
  run: function () {
    console.log("i am runnig"); //si no retorna nada muestra indefinido
  },
};
console.log(dog.name);
console.log(dog.run);

//Factorías con objetos
function createDog(name) {
  return {
    name,
    run: function () {
      console.log("i am runnig"); //si no retorna nada muestra indefinido
    },
  };
}

const chiguagua = createDog("Nana");
console.log(chiguagua.name);

//constructores
function Circle(redius) {
  this.radius = redius;
  this.location = {
    x: 1,
    y: 2,
  };
  this.draw = function () {
    console.log("DRAW");
  };
}

const circle = new Circle(4);
console.log(circle.radius);

//esto es lo mismo es una instancia de la clase o funcion circle que funciona de la mismam forma

class Circle {
  constructor(redius) {
    this.radius = redius;
    this.location = {
      x: 1,
      y: 2,
    };
  }

  draw() {
    console.log("DRAW");
  }
}

//las funciones son objetos

const animal = new Function("name", "this.name = name");
const dog = animal("Nana");
console.log(dog);
/** valor
 *
 * Number
 * String
 * Boolean
 * Symbol
 * Undifined
 * null
 *
 * cada uno de estps ocupa un espacio en memoria diferente
 */

let a = 10;
let b = a;
a = 40;
console.log(a, b); //a = 40 y b = 10
/** referencia
 *
 * Object
 * Function
 * Array
 *
 * comparten el mismo espacio en la memoria
 * aunque sean diferentes ambos estan apuntando 
 * al mismo espacio en la memoria
 *
 */

 a = { value: 10 };
 b = a;
a.value = 40;
console.log(a, b); //a = 40 y b = 40

//Manipulación de pr opiedades

a.height = 30;
a["name"] = "Nana";

// propiedades privadas
function Car(_doors) {
  let doors = _doors;
  let price = 1200;

  this.getPrice = () => {
    return doors * price;
  };
}

const ferrari = new Car();
console.log(ferrari.getPrice());
/**al poner let se crea una propíedad privada que 
 * oculta cuando se crea la instancia de la funciion Car */
