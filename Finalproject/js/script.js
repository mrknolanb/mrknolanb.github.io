function toggleMenu() {
}

document.querySelector('#thisyear').textContent = new Date().getFullYear();


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    document.getElementById("primaryNav").classList.toggle("hide");

    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    document.getElementById("primaryNav").classList.toggle("hide");

    menuOpen = false;
  }
});


const APIKey = "5976fad0960c50bf09e8fe2e09d89de8"
const lon = "122.95"
const lat = "10.66667"

const APIUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
fetch(APIUrl)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  const temperature = document.querySelector('#currentTemp');
  temperature.textContent = Math.round(jsObject.current.temp) ;
  const currently = document.querySelector('#currently');
    const desc = jsObject.current.weather[0].description;
    currently.innerHTML = `${desc}`;
    document.getElementById("currently").style.textTransform = "capitalize";
    const humid = document.querySelector('#humidity');
    humid.textContent = jsObject.current.humidity
    const imgsrc = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${jsObject.current.weather[0].icon}.svg`
    document.getElementById(`iconTemp`).textContent = imgsrc
    document.getElementById(`iconTemp`).src = imgsrc
})

var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
    showSlides(slideIndex += n);
}
 
function currentSlide(n) {
    showSlides(slideIndex = n);
}
 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

