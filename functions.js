function functionName(parameter1,parameter2){
    return parameter1+parameter2;
}

function add(a,b){
    return a+b;
}
// console.log(add(56,78));

// function expression

const functionName1=  function(parameter1,parameter2){
    return parameter1+parameter2;
}

const multiply = function(x,y){
    return x*y;
}
// console.log(multiply(5,3));

const functionName2= (parameter1,parameter2)=> {
    return parameter1+parameter2;
}

const subtract =(a,b)=>a-b;
// console.log(subtract(15,6));

function greet(name='Guest'){
    return `Hello, ${name}!`
}
// console.log(greet());


function calculate(a,b){
    const sum = add(a,b);
    const product = multiply(a,b);
    return `Sum: ${sum}, Product: ${product}`;
}
console.log(calculate(5,5));

// 1. square(x)
// 2. cube(x)
// 3. calculate(x)

function square(x){
    return x**2;
}
function cube(x){
    return x**3;
}
function calculate(x){
    const square1 = square(x);
    const cube1 = cube(x);
    return `Square: ${square1}, Cube: ${cube1}`;
}
// console.log(calculate(5));
calculate(5);

// homework: GRADE CALCULATOR
// simple interest calculator