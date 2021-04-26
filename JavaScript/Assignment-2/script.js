const listContainer = document.querySelector(".listContainer")
const listForm = document.querySelector(".listForm")
const listInput = document.querySelector(".inputTask")

const localStorage_list = "task.lists"
let lists = JSON.parse(localStorage.getItem(localStorage_list)) || []

listForm.addEventListener("submit", e => {
    e.preventDefault()
    const listName = listInput.value
    if (listName == null || listName === "") {
        msgErr()
        return
    }
    const list = createList(listName)
    listInput.value = null
    lists.push(list)
    msgAdd()
    saveAndRender()
})

//displaying error message when input is empty
function msgErr() {
    let msgErr = document.querySelector(".err")
    msgErr.classList.add("isActive")
    setTimeout(() => {
        msgErr.classList.remove("isActive")
    }, 2000);
}

function createList(name) {
    return {
        id: Date.now().toString(), //returns number of milliseconds since Jan 1, 1970
        name: name,
        complete: false
    }
}

//displaying add message when task is added
function msgAdd() {
    let msgAdd = document.querySelector(".add")
    msgAdd.classList.add("isActive")
    setTimeout(() => {
        msgAdd.classList.remove("isActive")
    }, 2000);
}

function saveAndRender() {
    save()
    render()
}

function save() {
    localStorage.setItem(localStorage_list, JSON.stringify(lists))
}

//clear all the elements which already exist
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

function render() {
    clearElement(listContainer)
    lists.forEach(list => {
        const listElement = document.createElement("li")
        const deleteButton = document.createElement("button")

        listElement.dataset.listId = list.id
        listElement.classList.add("listItem")
        listElement.innerText = list.name
        setAttributes(listElement, {
            "tabindex": "0",
        })

        deleteButton.classList.add("deleteBtn")
        deleteButton.innerText = "×"
        setAttributes(deleteButton, {
            "tabindex": "0",
            "aria-label": "delete the task"
        })

        listElement.appendChild(deleteButton)
        listContainer.appendChild(listElement)

    })
    del()
    complete()
    countElement()
}

function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}


//starts when deleting a task
function del() {
    let deleteBtns = [...document.querySelectorAll(".deleteBtn")]
    deleteBtns.forEach(btn => btn.addEventListener("click", deleteTask))
    deleteBtns.forEach(btn => btn.addEventListener("keyup", (e) => {
        e.preventDefault()
        if (e.keyCode === 13) {
            btn.click()
        }
    }))

    function deleteTask() {
        this.parentElement.remove()
        lists.splice(this, 1)
        save()
        countElement()
    }
}

//starts when clicking on the task
function complete() {
    let listItems = [...document.querySelectorAll(".listItem")]
    listItems.forEach(item => item.addEventListener("click", () => {
        item.classList.toggle("checked")
        countElement()
    }))
}

function countElement() {
    let itemCount = listContainer.childElementCount
    let checkedElement = document.querySelectorAll(".checked").length
    let uncheckedElement = itemCount - checkedElement
    let taskCounter = document.querySelector(".remainTasksCounter")
    taskCounter.innerText = `${uncheckedElement} task left`
}

render()