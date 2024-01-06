const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginInput = document.querySelector("#login-form input");
const time4Greet = new Date().getHours();

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
let GREETING_KEY

function paintGreetings(name){
    if(time4Greet >6 && time4Greet < 12){
        GREETING_KEY = "morning";
    } else if(time4Greet >= 12 && time4Greet < 18){
        GREETING_KEY = "afternoon";
    } else {
        GREETING_KEY = "evening";
    }
    greeting.innerText =`Good ${GREETING_KEY}, ${name}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
    console.log(username);
    setInterval(timedOutQuote,INTERVAL_KEY);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    //show greetings
    paintGreetings(savedUsername);
}