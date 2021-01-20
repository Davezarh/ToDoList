let tasks = [];
let hideTasksDone = false;

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

    const markAllDone = () =>{
       tasks = tasks.map((task)=> ({
            ...task,
            done:true
          }))   
        render();
    }

    const hideDoneTasks = () =>{
        hideTasksDone =! hideTasksDone;   
        render();
    }
  
    const renderTasks = () => {
        const taskHtml = task =>`
         <li class="todo__Item ${task.done && hideTasksDone ? "todo__Item--Done": ""}">
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
         </li>
        `;
    const taskElement = document.querySelector(".todo__List");
    taskElement.innerHTML = tasks.map(taskHtml).join("");
    }

    const renderButtons = () =>{
        const buttons = document.querySelector(".todo__Buttons")
        if(!tasks.length){ buttons.innerHTML = ""; return; }

        buttons.innerHTML=`
        <button class ="markAllDone" ${tasks.every(({done}) => done ) ?"disabled" :""}>Ukończ wszystkie</button>
        <button class ="hideDoneTasks"> ${hideTasksDone ? "Pokaż" : "Ukryj"} ukończone</button>
        `
    }
    const bindEvents = () =>{
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

    const markDoneButton = document.querySelector(".markAllDone")
    if(markDoneButton){ markDoneButton.addEventListener("click",markAllDone) }

    const hideDoneButton = document.querySelector(".hideDoneTasks")
    if(hideDoneButton){ hideDoneButton.addEventListener("click",hideDoneTasks) }
     }  

    const formReset = () =>{
        document.querySelector(".form").reset()
    }
    const focusInput = () => {
        const input = document.querySelector(".todo__Input")
        input.focus();
    }
    const resetInput = () =>{
        const resetButton = document.querySelector(".todo__Button")
        resetButton.addEventListener("click",focusInput)
    }
    const render = () => {
        renderTasks()
        renderButtons()
        bindEvents()
        resetInput()
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newContent = document.querySelector(".todo__Input").value.trim();
         if(newContent === ""){ return; }
            else{ formReset() } 

        addNewTask(newContent)  
        render()
    }

    const init = () => {
        render()
        const form = document.querySelector(".form");
        form.addEventListener("submit",onFormSubmit)  
    }

init();