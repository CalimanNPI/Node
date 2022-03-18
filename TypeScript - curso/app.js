var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello work");
//types
var myString = "Hello work";
myString = 22.2 + "sdsa";
myString =
    22 +
        "Va a mantener ese tipo por el resto de su vida util, así que no se le pueden asignar ningun otro tipo como en JAVA";
var myNumber = 22;
myNumber = parseInt("231");
myNumber = Number("231");
var myBool = true || false;
var myVar = true;
myVar = "hello";
document.write(myString);
document.write(myNumber.toString());
//Arrays
var stringArray = ["asdasd"];
var numberArray = [1];
var booleanArray = [true];
var anyArray = ["asdasd", 1, true];
//Tuple
var strNumTuple;
strNumTuple = ["hello", 3]; // ['hello', 2, {}] ->error no acepta el onjeto
//void-> undefined, undefined, null
//functions
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 2));
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    return num1 + num2;
};
console.log(mySum("2", 1));
function getConcat(num1, num2) {
    if (num2 == undefined) {
        return num1 + " perra";
    }
    return num1 + " " + num2;
}
console.log(getConcat("Hello"));
function myVoid() {
    return;
} //function undefined
function argSum() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var sum = 0;
    for (var index = 0; index < arg.length; index++) {
        sum += arg[index];
    }
    return sum;
}
console.log(argSum(1, 2, 3, 4, 5, 6, 7, 8, 9));
function showTodo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
var myTodo = { title: "Eat Diner", text: "lorem" };
showTodo(myTodo);
//clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name));
    };
    User.prototype.getUser = function (text) {
        console.log("".concat(this.name, " message: ").concat(text));
    };
    return User;
}());
var john = new User("carlos", "hola@gmail", 33);
console.log(john.register());
console.log(john.getUser("Hello iam perrin"));
//clases inheritance
var Report = /** @class */ (function () {
    //public
    //private
    function Report(data) {
        this.data = data;
    }
    Report.prototype.run = function () {
        this.data.forEach(function (line) {
            console.log(line);
        });
    };
    return Report;
}());
var report = new Report(["first line", "second line"]);
report.run();
var TabbedReport = /** @class */ (function (_super) {
    __extends(TabbedReport, _super);
    function TabbedReport(/**values: string[],*/ headers) {
        var _this = _super.call(this) || this;
        _this.header = headers;
        return _this;
    }
    TabbedReport.prototype.run = function () {
        console.log(this.header);
        _super.prototype.run.call(this);
    };
    return TabbedReport;
}(Report));
var r = new TabbedReport(["Alice Green", "Isaac Asimov", "Isaac Delahaye"], ["Name"]);
r.run();
