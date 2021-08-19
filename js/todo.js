const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li =  document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    //<li><span></span></li> 구조로 만들기
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    //새로고침 막기
    event.preventDefault();
    //value 저장하기
    const newTodo = toDoInput.value;
    //input value 비우기 
    toDoInput.value=""; 

    //object {id:~~, text:"blah"} 이런 형태로 만들기
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //Date.now()는 현재시간을 밀리 초(1/1000) 단위로 주는 함수 -> 랜덤처럼 사용하기 좋음
    };

    //toDos array에 newToDo push
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}