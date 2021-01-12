let tasks = [];

const form = document.querySelector(".form");
const todoButton = document.querySelector(".todo-button");
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
    newTodo.innerText = (`Testing`);    
}
const addNewTask = (newContent) =>{
        tasks = [
            ...tasks,
            {content: newContent}
        ]
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
    console.log(newContent,tasks)
    liTodo()  
})
