//TYPESCRIPT IS STRICTLY TYPER LANGUAGE
//JS IS LOOSELY TYPED LANGUAGE
//npm init --y
//npx tsc --init
//npx tsc -b -- to convert to javascript

const x:number = 10 // x is the number/integer value


function sample_func(a:number, b:number) { // sample function where arguments are given type
    console.log(a,b)
}

sample_func(10,10)

function sum(a:number, b:number):number { // sample function return type is specified
    return a + b
}

console.log(sum(10,10))


// how to define a type of a function
function a(fn:() => void){
    setTimeout(fn,2000)
}

function fn(){
    console.log("Hello")
}

// a(fn)


//interface

interface Person {
    name: string,
    age: number
}

function greet(person: Person){
    console.log(`Hello ${person.name}, you are ${person.age} years old`)
}

// greet({name: "John", age: 30})

interface Person{
    name: string,
    age: number,
    greet : (pharse:string) => void
}


class Employee implements Person{
    name: string;
    age:number;

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    greet(pharse:string){
        console.log(`${pharse} ${this.name} ${this.age}`)
    }
}

// const e = new Employee ("ak",26)
// console.log(e)

// type 

type User={
    name:string,
    age:number,
}

function greetUser(user:User){
    console.log(`Hello ${user.name}, you are ${user.age} years old`)
}

// 1. union |

type action = number | string 

// 2. intersection &

type person = {
    name: string,
    startDate: Date,
}

interface manager {
    name: string,   
    dept:string,
}

type employee = person & manager

// const office: employee = {
//     name: "John",
//     startDate: new Date(),
//     dept: "HR",
// } 

function officed(office:employee):void{
    console.log(`${office.name} works in ${office.dept} since ${office.startDate}`)
}

// officed(office)

officed({
    name: "John",
    startDate: new Date(),
    dept: "HR",
})


//Array 

const numbers: number[] = [1,2,3,4,5]

// const arr:[number,string,boolean] =[2,"string",false]

function max_ele(arr:number[]){
    return Math.max(...arr)
}

// console.log(max_ele(numbers))

//ENUM
// used to define constants values 
enum directions{
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
//changing constants values

// enum directions{
//     UP ="up",
//     DOWN="down",
//     LEFT="left",
//     RIGHT="right",
// }

function doSomething(keypressed:directions){
    if(keypressed === directions.UP){
        // console.log("Move Up")
    }
    if(keypressed === directions.DOWN){
        // console.log("Move down")
    }
}

doSomething(directions.UP)
doSomething(directions.DOWN)

//assignment

function return_first_ele (arr:number[]|string[]){
    return arr[0]
}
// console.log(return_first_ele([1,2,3,4]))
// console.log(return_first_ele(["a","b","c","d","e","f","g","h","i"]))

// Generic

function generic_function<G>(arg:G):G{
    return arg
}

const output1=generic_function<string>("Hello")
const output2=generic_function<number>(1000)

// console.log(output1.charAt(0));


//Advanced functions

interface users {
    id: number,
    name: string,
    email: string,
}

var users_data : users ={
    id:121,
    name: "John Doe",
    email: "johndoe@example.com",
}

type updateuser = Pick<users,"name"|"email">

type updateanyuser = Partial<updateuser>

function update_users(users:updateanyuser) {
  return  users_data ={
        ...users_data,
        ...users
    }
}

// console.log(update_users({name:"abi"}))

//Readonly

// interface person_data {
//     readonly id: number,
//     readonly name: string,
//     email: string,
//     age: number,

// }

interface person_data {
     id: number,
     name: string,
    email: string,
    age: number,

}

const person:Readonly<person_data> = {
    id:121,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
}

// person.id = 122 // error: Cannot assign to 'id' because it is a read-only property

