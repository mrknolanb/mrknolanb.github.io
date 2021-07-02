var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
document.querySelector('#lastmod').textContent = today.toLocaleDateString("en-GB", options);
document.querySelector('#thisyear').textContent = new Date().getFullYear();
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


const cityid = "5585010"
const APPID = "5976fad0960c50bf09e8fe2e09d89de8"

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#curtemp');
    temperature.textContent = Math.round(jsObject.list[0].main.temp);

    const currently = document.querySelector('#current');
    const desc = jsObject.list[0].weather[0].description;
    currently.innerHTML = `${desc}`;
    document.getElementById("current").style.textTransform = "capitalize";

    const windspeed = document.querySelector('#windspeed');
    windspeed.textContent = Math.round(jsObject.list[0].wind.speed)
    
    const humid = document.querySelector('#humid');
    humid.textContent = jsObject.list[0].main.humidity

    window.onload = getWindChill() ;

//Calculating the windchill using the data from the API
    function getWindChill() {
        const tempF = jsObject.list[0].main.temp
        var speed = parseInt(document.getElementById('windspeed').innerHTML);
        result = windChill(tempF, speed);
        document.getElementById('windchill').innerHTML = result + "&deg;F ";
        }

        function windChill(tempF, speed) {
            var windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
            var results = Math.round(windChillFactor);

            return results;
}
// ======================================================================================================================

    
    const fiveDayForecastData = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));

	console.log(fiveDayForecastData);

	const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
	fiveDayForecastData.forEach( x => {
	  let d = new Date(x.dt_txt);
    //   console.log(d)
    document.getElementById(`temp${day+1}`).textContent = Math.round(x.main.temp)
    document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
    document.getElementById(`current${day+1}`).textContent = `${x.weather[0].description}`
    const imgsrc = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${x.weather[0].icon}.svg`
    document.getElementById(`imgday${day+1}`).textContent = imgsrc
    document.getElementById(`imgday${day+1}`).src = imgsrc
    day++;
	});
});

// ======================================================================================================================


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Fish Haven') {
      let events = towns[i].events;
      for (let i=0; i < events.length; i++) {
      let event = document.createElement('p');
      event.innerHTML = events[i];
      document.querySelector('.townEvents').appendChild(event);
      }
    }
   }
});