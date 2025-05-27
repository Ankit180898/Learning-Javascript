let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
;

displayTodos();
function addTodo() {
    const inputElement = document.querySelector('.js-todo-input').value;
    const dueDateElement = document.querySelector('.js-due-date-input').value;
    if (inputElement.trim() === '' || dueDateElement.trim() === '') {
        alert('Please enter a todo and a due date');
        return;
    }
    todoList.push({
        name: inputElement,
        dueDate: dueDateElement
    });
    localStorage.setItem('todoList', JSON.stringify(todoList));
    clearInput();

    displayTodos();

}
function displayTodos() {
    
    let todoListElement = document.querySelector('.js-display-todos');
    todoListElement.innerHTML = '';
 
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const { name } = todoObject;
        // const { dueDate } = todoObject;
        const { name, dueDate } = todoObject; // Destructuring assignment
        if( !name || !dueDate) {
            continue; // Skip empty todos
        }
        todoListElement.innerHTML += `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="removeTodo(${i},1)
         displayTodos();
        ">Delete
        </button>
        `;
    }
}

function removeTodo(index, count) {

    todoList.splice(index,count);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayTodos();
}

function clearInput() {
    document.querySelector('.js-todo-input').value = '';
    document.querySelector('.js-due-date-input').value = '';
    // Refocus the input field after clearing
    // so the user can continue adding todos without clicking again
    document.querySelector('.js-todo-input').focus();
}

// Accumulator pattern
const nums = [1, 1, 3];
let total = 0;
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}
console.log(total);

const numsDoubled = [];
for (let i = 0; i < nums.length; i++) {
    numsDoubled.push(nums[i] * 2);
}
console.log(numsDoubled);

