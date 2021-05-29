window.onload = getWindChill() ;

function getWindChill() {
var tempF = parseInt(document.getElementById('curtemp').innerHTML);
var speed = parseInt(document.getElementById('windspeed').innerHTML);
result = windChill(tempF, speed);
document.getElementById('windchill').innerHTML = result + "&deg;F ";
}

function windChill(tempF, speed) {
var windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
var results = windChillFactor.toFixed(2);

return results;
}
