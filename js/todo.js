const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.querySelector("#todo-list");

function paintToDo(newTodo){
    const li =  document.createElement("li");
    const span = document.createElement("span");
    //<li><span></span></li> 구조로 만들기
    li.appendChild(span);
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
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);