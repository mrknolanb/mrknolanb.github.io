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