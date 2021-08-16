const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(){
    //새로고침 막기
    event.preventDefault();
    //value 저장하기
    const newTodo = toDoInput.value;
    //input value 비우기
    toDoInput.value="";
}

toDoForm.addEventListener("submit", handleToDoSubmit);