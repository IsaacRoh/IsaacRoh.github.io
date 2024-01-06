const images = [
    "0.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "7.jpg",
    "8.jpg",
];

const todaysImage = images[Math.floor(Math.random()*images.length)];

const bodyHtml = document.querySelector("body");

bodyHtml.style.backgroundImage = `url(imgs/${todaysImage})`;