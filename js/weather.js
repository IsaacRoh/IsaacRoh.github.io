const API_KEY = 'c1fc864d316f89fca34f0aa859f18487';

function onGeoOk(location){
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json().then(data =>{
        const temparature = document.querySelector("#weather span:first-child");
        const weather = temparature.nextElementSibling.nextElementSibling
        const city = document.querySelector("#weather span:last-child");

        console.log(weather);
        temparature.innerText = `${data.main.temp} ℃`;
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        console.log(data);


    }));
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

