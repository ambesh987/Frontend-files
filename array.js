
//empty array
// console.log(typeof(arr));


let mixedArray =[1, 'two', {name: 'john'}, [5,6]];

// console.log(numbers[4]);
// console.log(numbers[numbers.length-3]);


// numbers[1]=10;
// console.log(numbers);

// add 
// let arr = [];
// arr.push('apple');
// arr.push('orange');
// console.log(arr);
// arr.unshift('banana');
// console.log(arr);

// let fruits =['apple', 'orange', 'fig'];
// // let removed = fruits.pop();
// // console.log(fruits,removed);

// fruits.shift();
// console.log(fruits);

//iterate over arrays
let numbers1 = [1,2,3,4,5];

// for(let i=0; i<numbers1.length; i++){
//     console.log(numbers1[i]);
// }

// numbers1.forEach(function(n){
//     console.log(n*5);
// });

// console.log(numbers1.indexOf(16));
// console.log(numbers1.includes(55));
// console.log(numbers1.length);

// let numbers =[1,2,3,4,5];
// numbers.push(16);
// console.log(numbers.includes(16));

// console.log(['a','b','c'].indexOf('b'));

let arr1 =[1,2];
let arr2 =[3,4];
arr1.push(arr2);
// console.log(arr1.flat());

let array = ['a','b','c'];
array.reverse();
// console.log(array);

let num = [25,35,45];
num.reverse();
// console.log(num);

let alphabet ="abcdefghijkl:mnopqrs:tuvwxyz";
let alphabet1= alphabet.split(":");
// console.log(alphabet1);

// 1. maximum elemnt in the array 
// let string= ['d','b','c'];
// string.sort();
// console.log(string);
// let number = [10,5,8,3,105,6,75];
// number.sort(function(a,b){
//     return a-b;
// });
// console.log(number[number.length-1]);
// output= 75; [3,5,6,8,10,75,105]
// let max =number[0]; //10

// for(let i=1; i<number.length;i++){
//     if(number[i]>max){
//         max = number[i];
//     }
// }
// console.log(max);

// let number = [10,5,8,3,105,6,75];
let number =[1,2,3,4,51,5,6];
let isSorted= true;
for(let i=1; i<number.length;i++){
    if(number[i]<number[i-1]){
        isSorted=false;
        break;
    }
}
console.log(isSorted);
