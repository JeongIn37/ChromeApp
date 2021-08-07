const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //website가 load 되자마자 실행시켜주는 용 (없으면 처음 들어 갔을 때 00:00:00으로 시작)
setInterval(getClock, 1000);