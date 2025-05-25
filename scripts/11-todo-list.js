const todoList = [];
function addTodo() {
    const todoElement = document.querySelector('.js-todo-input').value;
    console.log(todoElement);
    todoList.push(todoElement);
    console.log(todoList);
    clearInput();
    for(let i =0 ;i<todoList.length;i++){
        document.querySelector('.js-display-todos').innerHTML += `<li>${todoList[i]}</li>`;
    }
}
function clearInput(){
    document.querySelector('.js-todo-input').value = '';
    document.querySelector('.js-todo-input').focus();
}

