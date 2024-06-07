const users =[
    {id:1, name: 'Ram', age:30, email:'ram@yahoo.com'},
    {id:2, name: 'Bob', age:32, email:'bob@yahoo.com'},
    {id:3, name: 'Alice', age:34, email:'alice@yahoo.com'}

];

//function to create a user item element

function createUserItem({name,age,email}){
    const userItem= document.createElement('div');
    userItem.classList.add('user-item');
    userItem.innerHTML= `
    <strong>Name: </strong> ${name} <br>
    <strong>Age: </strong> ${age} <br>
    <strong>Email: </strong> ${email}
    `
    return userItem;
}

function render(users){
    const userList= document.getElementById('user-list');
    userList.innerHTML =''; //existing content gets clear

    users.forEach(e =>{
        const userItem = createUserItem(e);
        userList.appendChild(userItem);
    })
}

render(users);