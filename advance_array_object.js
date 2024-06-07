//Array Destructuring 
// array desturcturing allows you to extract values from arrays and assigns them to variables in a more concise way 

// const array =[1,2];

// let a = array[0];  
// let b = array[1];


// const [a,b] = [1,2]

// const [,,c] = [1,2,3]
// console.log(c);

//rest
const [a,...rest] =[1,2,3,4]
console.log(a);
console.log(rest);

//spread
const arr1=[1,2,3];
const arr2= [4,5,6];
const combine =[...arr1,...arr2];
console.log(combine.flat()); //flat

// Object Desturcturing

// const {a:x,b:y} ={a:1, b:2};
// console.log(x);
// console.log(y);

// const user ={
//     id:42,
//     info:{
//         name:'John',
//         age:25
//     }
// };

// const {id, info:{name,age}} = user;
// console.log(id);
// console.log(name);
// console.log(age);

//swapping variables

let m =5;
let n=6;

[m,n]=[n,m];
console.log(m);
console.log(n);