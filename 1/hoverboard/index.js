var container = document.getElementById("container")
var colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
var SQUARES = 500;
for (let i = 0; i < SQUARES; i++) {
  ( function(i) {
    var squares = document.createElement("div")
    squares.classList.add("square")
    container.appendChild(squares)
    squares.addEventListener('mouseover', () => setColor(squares))
    squares.addEventListener('mouseout', () => removeColor(squares))
   })(i)
}

function setColor(ele) {
    var color = getRandomColor()
    ele.style.background = color
    ele.style.boxShadow = "0 0 2px ${color},0 0 10px ${color}"
}
function removeColor(ele) {
    ele.style.background = "#1d1d1d";
    ele.style.boxShadow = "0 0 2px #000"
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]

}