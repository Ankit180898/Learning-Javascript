let todoList = [];
displayTodos();
function addTodo() {
    const todoElement = document.querySelector('.js-todo-input').value;
    console.log(todoElement);
    todoList.push(todoElement);
    displayTodos();
    clearInput();

}
function displayTodos() {
    let todoListElement = document.querySelector('.js-display-todos');
    todoListElement.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        todoListElement.innerHTML += `<p>${todoList[i]}</p> <button onclick="removeTodo(${i})">Remove</button>`;
    }
}

function removeTodo(index) {
    todoList.splice(index, 1);
    displayTodos();
}

function clearInput() {
    document.querySelector('.js-todo-input').value = '';
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

