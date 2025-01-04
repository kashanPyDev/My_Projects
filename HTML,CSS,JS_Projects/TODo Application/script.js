

let id = (id) => document.getElementById(id); 
let addtodobtn = id('add-todo-btn'); 
let todopopup = id('todo-popup');
let savetodo = id('save-todo-button');
let closepopupbtn = id('close-popup-button');
let todoinput = id('todo-input');
let todolist = id('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editindex = null;

addtodobtn.addEventListener('click', () => {
    todopopup.style.display = "flex";
    todoinput.value = '';
    editindex = null;
});

closepopupbtn.addEventListener("click", () => {
    todopopup.style.display = "none";
});

savetodo.addEventListener("click", () => {
    let todotext = todoinput.value.trim();
    if (todotext) {
        if (editindex !== null) {
            todos[editindex] = todotext;
        } else {
            todos.push(todotext);
        }
        localStorage.setItem('todos', JSON.stringify(todos));
        todopopup.style.display = "none";
        renderTodos();
    } 
    else {
        alert("Please add something");
    }
});

// Function to render todos
function renderTodos() {
    todolist.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
        let li = document.createElement('li');
        li.textContent = todo;

        // Create Edit Button
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => {
            todoinput.value = todo; // Set input to current todo
            todopopup.style.display = "flex"; // Open popup
            editindex = index; // Set the index to edit
        };

        // Create Delete Button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            todos.splice(index, 1); // Remove the todo
            localStorage.setItem('todos', JSON.stringify(todos)); // Update local storage
            renderTodos(); // Re-render the list
        };

        // Append buttons to the list item
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todolist.appendChild(li);
    });
}

// Initial render on page load
renderTodos();


