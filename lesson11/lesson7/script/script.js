var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
document.querySelector('#lastmod').textContent = today.toLocaleDateString("en-GB", options);
document.querySelector('#thisyear').textContent = new Date().getFullYear();
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

if (today.getDay() == 5) {
    document.querySelector('.banner').style.display = "block"

}

/**********Local Storage*********/

function getNumberOfDays(start, end) {
    const date1 = start;
    const date2 = end;
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2 - date1;
    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
} 



let newVisit = Date.now() ;
let lastVisit = localStorage.getItem("lastVisit") ;
document.getElementById("result").innerHTML = "You visited this page " + getNumberOfDays(lastVisit, newVisit) + " day/s ago!";

localStorage.setItem("lastVisit", newVisit) ;