let tasks = [];

const form = document.querySelector(".form");
const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".input-todo");
const todoList = document.querySelector(".todo-list")

const liTodo = () =>{
    const todoDiv = document.createElement("div") 
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    const trashButton = document.createElement("button")
    trashButton.classList.add("trashButton")
    todoDiv.appendChild(trashButton)

    const doneButton = document.createElement("button")
    doneButton.classList.add("doneButton")
    todoDiv.appendChild(doneButton)

    todoList.appendChild(todoDiv)
}
const onFormSubmit = form.addEventListener("submit",(event)=>{
    event.preventDefault();
    liTodo();
})