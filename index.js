// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("previous")
let appendEl = document.createElement("previous")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let saveCount = count
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += count + ", "

    // NB: Make sure to not delete the existing content of the paragraph
    count = 0
    countEl.textContent = 0
}


