const hourE1 = document.getElementById("hours");
const minuteE1 = document.getElementById("minute");
const secondE1 = document.getElementById("seconds");
const millisecondE1 = document.getElementById("milliseconds");
const ampmE1 = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ms = new Date().getMilliseconds();
    let ampm = "AM";
    ampm = h > 12 ? ampm = "PM" :ampm;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    ms = ms < 10 ? "00" + ms : (ms < 100 ? "0" + ms : ms);
    hourE1.innerHTML = h;
    minuteE1.innerHTML = m;
    secondE1.innerHTML = s;
    millisecondE1.innerHTML = ms;
    ampmE1.innerHTML = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000)
}
updateClock();

