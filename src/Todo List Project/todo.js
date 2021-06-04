//Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { // Tüm event listlenerlar
    form.addEventListener("submit",addTodo);
}

function addTodo(e) {
    const newTodo = todoInput.value.trim(); // trim başta ve sondaki boşlukları siler.

    addTodoToUI(newTodo);

    
    
    e.preventDefault();
}

function addTodoToUI(newTodo) { // Aldığı String değerini list item olarak UI'a ekleyecek.
    /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
    */

     
    
}




