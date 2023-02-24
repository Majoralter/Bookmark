const menu = document.getElementById("menu")
const mobileNav = document.querySelector(".mobile-nav")
const menuBars = document.querySelectorAll(".bar")
const webLogo = document.querySelector(".web-logo")
const mobileLogo = document.querySelector(".mobile-logo")

menu.addEventListener("click",() =>{
    mobileNav.classList.toggle("active")
    document.querySelector(".bar-1").classList.toggle("rotate")
    document.querySelector(".bar-2").classList.toggle("rotate")
    document.querySelector(".bar-3").classList.toggle("rotate")
    mobileLogo.classList.toggle("show")

    for(let i = 0; i < menuBars.length; i++){
        if(mobileNav.classList.contains("active")){
            menuBars[i].style.backgroundColor = "white"
            webLogo.style.display = "none"
          
        } else{
            menuBars[i].style.backgroundColor = "black"
            webLogo.style.display = "block"
        }
    }
})


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("step-btn");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-btn", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].classList.add("active-btn")
}