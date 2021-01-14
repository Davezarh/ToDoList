let tasks = [];

const form = document.querySelector(".form");
const todoButton = document.querySelector(".todo__Button");
const todoList = document.querySelector(".todo__List")

    const addNewTask = (newContent) =>
    {
        tasks = 
        [
            ...tasks,
            { content: newContent },
        ]
        renderTasks()
    }

    const removeTask = (index) =>
    {
        tasks =
        [
            ...tasks.slice(0,index),
            ...tasks.slice(index +1),   
        ]
        renderTasks();
        renderButtons();
    }

const renderTasks = () => {
    const taskHtml = task =>`
        <li class="todo__Item">
            <button class="todo__DoneButton">
            <i class="fas fa-check"></i>
            </button>
            <span class="todo__Content">
                ${task.content}
            <span>
            <button class="todo__TrashButton">
                <i class="fas fa-trash"></i>
            </button>
        </li>
    `;
    const taskElement = document.querySelector(".todo__List");
    taskElement.innerHTML = tasks.map(taskHtml).join("");
}

const renderButtons = () =>{
    const removeButton = document.querySelectorAll(".todo__TrashButton")
    removeButton.forEach((removedButton, index) => {
        removedButton.addEventListener("click", () => {
            removeTask(index)
        })
    })
    
}
const onFormSubmit = form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const newContent = document.querySelector(".todo__Input").value.trim();

    if(newContent === "")
    return;
    else{
        form.reset();
    }
    addNewTask(newContent)  
    renderTasks();
    renderButtons()
})