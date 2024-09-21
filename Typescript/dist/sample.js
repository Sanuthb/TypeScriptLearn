"use strict";
//TYPESCRIPT IS STRICTLY TYPER LANGUAGE
//JS IS LOOSELY TYPED LANGUAGE
//npm init --y
//npx tsc --init
//npx tsc -b -- to convert to javascript
const x = 10; // x is the number/integer value
function sample_func(a, b) {
    console.log(a, b);
}
sample_func(10, 10);
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10));
// how to define a type of a function
function a(fn) {
    setTimeout(fn, 2000);
}
function fn() {
    console.log("Hello");
}
function greet(person) {
    console.log(`Hello ${person.name}, you are ${person.age} years old`);
}
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(pharse) {
        console.log(`${pharse} ${this.name} ${this.age}`);
    }
}
function greetUser(user) {
    console.log(`Hello ${user.name}, you are ${user.age} years old`);
}
// const office: employee = {
//     name: "John",
//     startDate: new Date(),
//     dept: "HR",
// } 
function officed(office) {
    console.log(`${office.name} works in ${office.dept} since ${office.startDate}`);
}
// officed(office)
officed({
    name: "John",
    startDate: new Date(),
    dept: "HR",
});
//Array 
const numbers = [1, 2, 3, 4, 5];
// const arr:[number,string,boolean] =[2,"string",false]
function max_ele(arr) {
    return Math.max(...arr);
}
// console.log(max_ele(numbers))
//ENUM
// used to define constants values 
var directions;
(function (directions) {
    directions[directions["UP"] = 0] = "UP";
    directions[directions["DOWN"] = 1] = "DOWN";
    directions[directions["LEFT"] = 2] = "LEFT";
    directions[directions["RIGHT"] = 3] = "RIGHT";
})(directions || (directions = {}));
//changing constants values
// enum directions{
//     UP ="up",
//     DOWN="down",
//     LEFT="left",
//     RIGHT="right",
// }
function doSomething(keypressed) {
    if (keypressed === directions.UP) {
        // console.log("Move Up")
    }
    if (keypressed === directions.DOWN) {
        // console.log("Move down")
    }
}
doSomething(directions.UP);
doSomething(directions.DOWN);
//assignment
function return_first_ele(arr) {
    return arr[0];
}
// console.log(return_first_ele([1,2,3,4]))
// console.log(return_first_ele(["a","b","c","d","e","f","g","h","i"]))
// Generic
function generic_function(arg) {
    return arg;
}
const output1 = generic_function("Hello");
const output2 = generic_function(1000);
var users_data = {
    id: 121,
    name: "John Doe",
    email: "johndoe@example.com",
};
function update_users(users) {
    return users_data = Object.assign(Object.assign({}, users_data), users);
}
console.log(update_users({ name: 'John' }));
