//let, const and var

let a =5; //block scoped
a=7;


// console.log(a)  // Reassignment is possible

const b =3.14; //block scoped
// b = 2;
// console.log(b)


var c =7; //function scoped
c=8;
// console.log(c)


//Block Scoped

{
    let m = "I am blockscoped";
    // console.log(m);
}
// console.log(m)

//function scoped
function testVar(){
    var functionscoped = "I am inside a function";
    // console.log(functionscoped);
}
testVar();
// console.log(functionscoped);

// let a ="string"
// let b ='string'

//Template Literals

let name = "John";
let greeting = `Hello, ${name}!`;
// console.log(greeting);


// string methods

let str = "Hello World!"
let upper = str.toUpperCase();
let lower = str.toLowerCase();
// console.log(lower);

let stringg = "        Hello World          ";
let ans= stringg.trim();
// console.log(ans);

let numbers ="1,2,3,4,5,67,89,98";
let array = numbers.split(",").map(Number);
console.log(array);