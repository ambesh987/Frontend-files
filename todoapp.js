document.addEventListener('DOMContentLoaded',()=>{
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    //adding a new to-do item
    todoForm.addEventListener('submit',(event)=>{
        event.preventDefault();

        const newTodoText = todoInput.value.trim();

        if(newTodoText!==""){
            const newTodoItem = document.createElement('li');
            newTodoItem.innerHTML=`<span>${newTodoText}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>`
            todoList.appendChild(newTodoItem);
            todoInput.value="";
        }
    });

    todoList.addEventListener('click',(event)=>{
        if(event.target.classList.contains('complete-btn')){
            const todoItem= event.target.parentElement;
            const todoText = todoItem.querySelector('span');
            todoText.classList.toggle('completed');
        }

        if(event.target.classList.contains('delete-btn')){
            const todoItem = event.target.parentElement;
            todoList.removeChild(todoItem);
        }
    });




})