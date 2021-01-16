let tasks = [];
    const addNewTask = (newContent) =>{
        tasks = 
        [
            ...tasks,
            { content: newContent },
        ]
        render()
    }
    const removeTask = (index) =>{
        tasks =
        [
            ...tasks.slice(0,index),
            ...tasks.slice(index +1),   
        ]
        render()
    }
    const toggleTaskDone = (index) =>{
       tasks = [
            ...tasks.slice(0,index), 
            {   ...tasks[index],
                done: !tasks[index].done
            }, 
            ...tasks.slice(index + 1), 
        ]
        render()
        
    }
    const renderTasks = () => {
        const taskHtml = task =>`
         <li class="todo__Item">
            <span class="todo__Content ${task.done ? "todo__Content--done" : ""}">
                ${task.content}
            </span>
                <span class="todo__Buttons">
            <button class="todo__DoneButton">
            <i class="fas fa-check"></i>
            </button>
            <button class="todo__TrashButton">
                <i class="fas fa-trash"></i>
            </button>
                </span>
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
    const doneButton = document.querySelectorAll(".todo__DoneButton")
        doneButton.forEach((buttonDone,index)=>{
            buttonDone.addEventListener("click",()=>{
                toggleTaskDone(index)
            })
        })
    
    }
    const render = () =>{
        renderTasks()
        renderButtons()
    }
    const formReset = () =>{
        document.querySelector(".form").reset()
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newContent = document.querySelector(".todo__Input").value.trim();
       
         if(newContent === ""){
            return; 
         }
            else{
                formReset()
             } 
        addNewTask(newContent)  
        localStorage.setItem("tasks",JSON.stringify(tasks)) 
        render()
    }
    const init = () => {
        render()
        const form = document.querySelector(".form");

        form.addEventListener("submit",onFormSubmit)  
    }

    
init();