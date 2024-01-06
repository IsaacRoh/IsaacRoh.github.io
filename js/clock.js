const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const TIME_NOW = clock.innerText;
//    const seconds = String(date.getSeconds()).padStart(2,"0");
    if(TIME_NOW[2] === ":"){
        clock.innerText = `${hours} ${minutes}`/*:${seconds}`*/;
    } else {
        clock.innerText = `${hours}:${minutes}`/*:${seconds}`*/;
    }
}

getClock()
setInterval(getClock,1000);