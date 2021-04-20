let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;
let counterDOM = document.querySelector("#counterDOM")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", incDec)
decreaseDOM.addEventListener("click", incDec)

// localStorage.clear()
function incDec() {
    this.id == "increase" ? counter++ : counter--
    counterDOM.innerHTML = counter
    localStorage.setItem("counter", counter)

}