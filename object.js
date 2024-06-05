//Object in Javascript is a collection of data and functions. they're called as properties and methods

let car = {
    brand: "toyota",
    "car model": "corolla",
    year:2021
}

// console.log(car.brand); //dot notation
// console.log(car['car model']);  //bracket notation

let person ={};
person.name = "John";
person.age =30;
// console.log(person);

person.age=31;
console.log(person);

delete person.age;
console.log(person);

// Object Methods

let person1 ={
    name: "Chris",
    greet: function(){
        console.log("Hello "+this.name);
    }
};

//call method
person1.greet();

let book ={
    title: "Everest",
    author: "George",
    year:1987
};
console.log(book.title);
book.pages = 400;
book.year =1999;
console.log(book);

let user ={
    firstName: "Alex",
    lastName: "Smith",
    fullName: function(){
        return this.firstName + " "+ this.lastName;
    }
}
console.log(user.fullName());

//Exercise

// 1. Create an Object student: properties: name, age and Grade 
// 2. Add a method to display the student details
// 3. Modify, delete

// write a function to caluclate the sum of all elements in an array
//  sum=?
arr = [23,52,68,49,57,65];
function add(array){
    let sum=arr[0]; //23
    for(let i=1; i<array.length;i++){
        sum =sum-array[i] // 0-23 =-23
    }
    return sum;
}
console.log(add(arr));
