// Asynchronous JavaScript 

// key concepts:
// Synchronous and Async 

//synchronous Code
// console.log("start");
// console.log("end");

// asynchronous code 

// console.log("start");
// setTimeout(()=>{
//     console.log("Timeout");
// },5000);
// console.log("end");

//callbacks

// A callback is a function passed into another function as an argument, 
// which is then invoked inside the outer function
// function fetchData(c){
//     setTimeout(()=>{
//         c("Data Fetched");
//     },10000)
// }

// fetchData((m) =>{
//     console.log(m);
// });

// Promises

// Promises provide you a cleaner , more robust way to handle async operation 
//  State of promises:
// Pending: initial state, neither fulfilled nor rejected
// Fulfilled: operation successful
// Rejected: Operation failed

// creating a promise 

// const fetchData = new Promise((resolve,reject)=>{
//     console.log("Fetching Data...") //Indicate pending state
//     setTimeout(()=>{
//         resolve("Data Fetched");
//     },1000);
// });

// fetchData.then((message)=>{
//     console.log(message);
//     return "Next Data Fetched"
// }).then((nextMessage)=>{
//     console.log(nextMessage);
// }).catch((error)=>{
//     console.error(error);
// })

// Async/Await 

// async = declare an async function 
// await = pause execution of an async function 

// async function fetchData(){
//     try{
//         const message = await new Promise((resolve,reject)=> setTimeout(()=>resolve("Data Fetched"),5000));
//         console.log(message);

//     }catch(error){
//         console.error(error);
//     }
// }
// fetchData();

//API


async function fetchUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if(!response.ok){
            throw new Error("response not ok");
        }

        const user = await response.json();
        console.log(user);
    }catch(error){
        console.error(error);
    }
}
fetchUser();