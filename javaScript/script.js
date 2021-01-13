let tasks = [];

const form = document.querySelector(".form");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list")

const addNewTask = (newContent) =>{
    tasks.push(newContent)
}
const onFormSubmit = form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const newContent = document.querySelector(".input-todo").value.trim();

    if(newContent === "")
    return;
    else{
        form.reset();
    }
    addNewTask(newContent) 
    liTodo()  
})

const liTodo = () =>{
    const todoDiv = document.createElement("div") 
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li")
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    const doneButton = document.createElement("button")
    doneButton.innerHTML = "<i class='fas fa-check'></i>";
    doneButton.classList.add("complete-btn")
    todoDiv.appendChild(doneButton)

    const trashButton = document.createElement("button")
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("complete-btn")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
    newTodo.innerHTML = tasks
}
