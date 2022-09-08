var hourEl = document.querySelector('.hour')
var minuteEl = document.querySelector(".minute")
var secondEl = document.querySelector(".second")
var timeEl = document.querySelector(".time")
var dateEl = document.querySelector(".date")
var toggle = document.querySelector('.toggle')

var days = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
window.onload = function () {
    setInterval(setTime, 1000)
}

toggle.addEventListener('click', function (e) {
    var html = document.querySelector("html")
    // 切换背景颜色
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
        // e.target点了哪个就返回哪个

    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})
function setTime() {
    var time = new Date()
    var month = time.getMonth()
    var day = time.getDay()
    var date = time.getDate()
    var hour = time.getHours()
    var hoursForClock = hour >= 13 ? hour % 12 : hour;
    var minute = time.getMinutes()
    var second = time.getSeconds()
    var ampm = hour >= 12 ? 'pm' : 'am'
    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    // 取值函数  最小值，最大值，最小度数，最大度数
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`
    timeEl.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}` : minute}${ampm}`
    dateEl.innerHTML = `${months[month]},<span class="circle">${date}</span>,${days[day]}`
}
var scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime()
