var body = document.body
var slide = document.querySelectorAll(".slide")
var btn = document.querySelector(".btn")
var right = document.querySelector(".right")


let activeSlide = 0;

right.onclick = function () {
    activeSlide++
    if (activeSlide > slide.length - 1) {
        activeSlide = 0
    }
    setBgtobody()
    SerActive()
}

btn.onclick = function () {
    activeSlide--
    if (activeSlide < 0) {
        activeSlide = slide.length - 1;
    }
    setBgtobody()
    SerActive()
}

function setBgtobody() {
    body.style.backgroundImage = slide[activeSlide].style.backgroundImage

}
function SerActive() {
    slide.forEach((slide)=>slide.classList.remove('active'))
    slide[activeSlide].classList.add('active')
}