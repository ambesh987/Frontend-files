// Higher order function on arrays 

// higher order functions are the functions that operate on other functions, 
// either by taking them as a arugument or by returning them

// function add(a,b){
//     return a+b;
// }

// foreach

// Array.forEach((element,index,array)=>{
//    //do something
// });

// let numbers =[2,4,6,8,10];
// numbers.forEach((e)=>{
//     console.log(e*2);
// })

//map

//syntax

// let newArray = arr.map((element,index,array)=>{

// });
// let num =[2,4,6,8,10];
// let double = num.map((e)=> e*2);
// console.log(double);

//filter
// let newArray= arr.filter((element,index,array)=>{
// //return 
// })

// let nums= [1,2,3,4,5];
// let evens = nums.filter((e)=>e%2==0)
// console.log(evens);

//reduce

// let result = arr.reduce((accumulator, currentValue, index, array)=>{

// },initialValue);
let arr =[23,43,54,63,73];
let result = arr.reduce((sum,e)=>sum+e, 0);


// let sum=0;
// for(let i=0;i<arr.length; i++){
//     sum= sum+arr[i];
// }
console.log(result);

//some
//every

let numbers =[1,2,3,4,5];
let someEven = numbers.some(e=>e%2==0);
let allEven = numbers.every(e=>e%2==0);
console.log(someEven,allEven);


// SETs
let mySet = new Set();


// console.log(mySet);

mySet.add(1);
mySet.add(2);
mySet.add(1);
// console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.has(1));

mySet.delete(2)
console.log(mySet);

mySet.clear();
console.log(mySet);

// let values= [12,12,34,56,76,12,34,25,76];
// let mySet1= new Set(values);
// // console.log(mySet1);

let mySet1 = new Set([1,2,3,4,5]);
// console.log(mySet1);
let multi = new Set();

for(let e of mySet1){
    multi.add(e*2);
}
console.log(multi);


//https://github.com/ambesh987/Frontend-files