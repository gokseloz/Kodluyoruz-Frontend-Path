let salute = document.querySelector(".salute")
let user = prompt("Please Type Your Name")
if(user.length = ""){
    user = ""
}
salute.textContent = `Hello! ${user.toUpperCase()}`

function clock() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let d = date.getDay()

    let hourText = document.querySelector(".hourText")
    let minText = document.querySelector(".minText")
    let secText = document.querySelector(".secText")
    let dayText = document.querySelector(".dayText")
    let dot = document.querySelectorAll(".dot")

    switch (d) {
        case 1:
            d = "Monday"
            break;
        case 2:
            d = "Tuesday"
            break;
        case 3:
            d = "Wednesday"
            break;
        case 4:
            d = "Thursday"
            break;
        case 5:
            d = "Friday"
            break;
        case 6:
            d = "Saturday"
            break;
        case 7:
            d = "Sunday"
            break;
    }

    hourText.textContent = h
    minText.textContent = m
    secText.textContent = s
    dayText.textContent = d
    dot.forEach(e => {
        e.textContent = ":"
    });

    if (hourText.textContent < 10) {
        hourText.textContent = `0` + h
    }
    if (minText.textContent < 10) {
        minText.textContent = `0` + m
    }
    if (secText.textContent < 10) {
        secText.textContent = `0` + s
    }
}
setInterval(() => {
    clock()
}, 1000);