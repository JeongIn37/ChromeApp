const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li =  document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    //<li><span></span></li> 구조로 만들기
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    //새로고침 막기
    event.preventDefault();
    //value 저장하기
    const newTodo = toDoInput.value;
    //input value 비우기 
    toDoInput.value=""; 
    //toDos array에 newToDo push
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);