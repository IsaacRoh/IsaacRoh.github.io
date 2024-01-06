const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoBtn = document.getElementById("todo-btn");
const toDoArea = document.getElementById("todo-area");

const TODUS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODUS_KEY, JSON.stringify(toDos));
};

function deleteToDo(event){
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteLi.id));
    saveToDos();
};

function checkComplete(event){
    const doneLi = event.target.parentElement;
    const checkBox = event.target;
    const doneSpan = doneLi.querySelector("span");

    doneSpan.classList.add("complete");
    checkBox.classList.add("complete");
}


function paintToDo(newToDo){
    const newLi = document.createElement("li");
        newLi.id = newToDo.id;
    const newSpan = document.createElement("span");
        newSpan.innerText = newToDo.text;
    const button = document.createElement("button");
        button.innerText = "❌";
        button.addEventListener("click",deleteToDo);

    const checkBox = document.createElement("button");
        button.addEventListener("click",checkComplete);
        checkBox.id = "checkbox";
    
    newLi.appendChild(checkBox);
    newLi.appendChild(newSpan);
    newLi.appendChild(button);
    toDoList.appendChild(newLi);  
    saveToDos();
};

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
};

function handleToDoBtnClick(){
    toDoArea.classList.toggle("withdrew");
}

toDoForm.addEventListener("submit",handleToDoSubmit);
toDoBtn.addEventListener("click",handleToDoBtnClick);

const savedToDos = localStorage.getItem(TODUS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}