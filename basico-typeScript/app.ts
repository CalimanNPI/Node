console.log("hello work");

//types
var myString: string = "Hello work";
myString = 22.2 + "sdsa";
myString =
  22 +
  "Va a mantener ese tipo por el resto de su vida util, así que no se le pueden asignar ningun otro tipo como en JAVA";
var myNumber: number = 22;
myNumber = parseInt("231");
myNumber = Number("231");

var myBool: boolean = true || false;

var myVar: any = true;
myVar = "hello";

document.write(myString);
document.write(myNumber.toString());
//Arrays

var stringArray: string[] = ["asdasd"];
var numberArray: number[] = [1];
var booleanArray: boolean[] = [true];
var anyArray: any[] = ["asdasd", 1, true];

//Tuple
var strNumTuple: [string, number];
strNumTuple = ["hello", 3]; // ['hello', 2, {}] ->error no acepta el onjeto

//void-> undefined, undefined, null

//functions
function getSum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(getSum(1, 2));

var mySum = function (num1: number | string, num2: number): number {
  if (typeof num1 == "string") {
    num1 = parseInt(num1);
  }
  return num1 + num2;
};
console.log(mySum("2", 1));

function getConcat(num1: string, num2?: string): string {
  if (num2 == undefined) {
    return num1 + "Hola mami";
  }
  return num1 + " " + num2;
}
console.log(getConcat("Hello"));

function myVoid(): void {
  return;
} //function undefined

function argSum(...arg: number[]): number {
  let sum: number = 0;
  for (let index = 0; index < arg.length; index++) {
    sum += arg[index];
  }
  return sum;
}
console.log(argSum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//interfaces
interface ITodo {
  title: string;
  text: string;
}

function showTodo(todo: ITodo) {
  console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = { title: "Eat Diner", text: "lorem" };
showTodo(myTodo);

//clases

class User {
  name: string;
  email: string;
  age: number;

  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  register() {
    console.log(`${this.name}`);
  }

  getUser(text: string) {
    console.log(`${this.name} message: ${text}`);
  }
}

var john = new User("carlos", "hola@gmail", 33);
console.log(john.register());
console.log(john.getUser("Hello, iam dve "));

//clases inheritance
class Report {
  protected data: Array<string>;
  //public
  //private
  constructor(data: Array<string>) {
    this.data = data;
  }

  run() {
    this.data.forEach((line) => {
      console.log(line);
    });
  }
}

var report: Report = new Report(["first line", "second line"]);
report.run();

class TabbedReport extends Report {
  header: Array<string>;
  constructor(values: string[], headers: string[]) {
    super(values);
    this.header = headers;
  }

  run() {
    console.log(this.header);
    super.run();
  }
}

var r: TabbedReport = new TabbedReport(
  ["Alice Green", "Isaac Asimov", "Isaac Delahaye"],
  ["Name"]
);

r.run();
