const panels = document.querySelectorAll('.panel')
var body = document.querySelector("body")
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        console.log(panel);
        removeActiveClass();
        panel.classList.add('active')
    })
});
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    });

}


