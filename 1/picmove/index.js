var slide = document.querySelector(".wrap")
var before = document.querySelector(".before")
var handle = document.querySelector(".handle")
var marginx
handle.onmousedown = function (e) {
    marginx = e.pageX - handle.offsetLeft
    slide.addEventListener('mousemove', moveHandle)

}
handle.onmouseup = function (e) {
    slide.removeEventListener('mousemove', moveHandle)

}
function moveHandle(e) {
    handle.style.left = e.pageX - marginx + "px";
    before.style.width = e.pageX - marginx + "px";
}