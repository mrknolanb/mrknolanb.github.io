const cityid = "1729564";
const APPID = "5976fad0960c50bf09e8fe2e09d89de8"

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=metric`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temperature');
    temperature.textContent = jsObject.main.temp;
    const currently = document.querySelector('#currently');
    const desc = jsObject.weather[0].description;
    currently.innerHTML = `<strong>${desc.toUpperCase()}<strong>`;

    const imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imgsrc;
    document.getElementById('icon').setAttribute('src', imgsrc);
    document.getElementById('icon').setAttribute('alt',desc.toUpperCase())

    
});