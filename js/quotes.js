const quotes = [
    {
        quotes: "Dead man can not reverse",
        author: "F16 PILOT",
    },
    {
        quotes: "abc chocolate",
        author: "delicious",
    },
    {
        quotes: "에휴 하기싫어",
        author: "박명수",
    },
    {
        quotes: "꿈은 없구요, 그냥 놀고 싶습니다.",
        author: "박명수",
    },
    {
        quotes: "포기하는 순간 시합 종료야",
        author: "안감독",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const timedoutQuote = document.getElementById("timeout-quote");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
const timeQuote2 = quotes[Math.floor(Math.random()*quotes.length)];
const INTERVAL_KEY = 300000;

function timedOutQuote(){
    greeting.classList.toggle("hidden");
    timedoutQuote.innerText = timeQuote2.quotes;
    timedoutQuote.classList.toggle("hidden");
}

quote.innerText = todaysQuote.quotes;
author.innerText = `- ${todaysQuote.author}`;

if(savedUsername !== null){
    setInterval(timedOutQuote,INTERVAL_KEY);
}