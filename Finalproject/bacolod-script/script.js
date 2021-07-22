var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
document.querySelector('#lastmod').textContent = today.toLocaleDateString("en-GB", options);

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

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -200px 0px"
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);


  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

const feedbackElement = document.getElementById('feedback');
    const formElement = document.forms[0];
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        feedbackElement.innerHTML = 'Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!';
        feedbackElement.style.display = "block";
        document.body.classList.toggle('moveDown');
    });
