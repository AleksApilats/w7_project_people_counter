//DOM variables
//testing button increment-btn
let incrementBtn = document.getElementById("increment-btn");
console.log(incrementBtn);
//testing button save-btn
let saveBtn = document.getElementById("save-btn");
console.log(saveBtn);
let countEl = document.getElementById("count-el");
console.log(countEl);
let entriesEl = document.getElementById("entries-el");
console.log(entriesEl);

//count variable set to 0
let count = 0;

//function to count people
function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

//function to render increment entries
function save() {
    entriesEl.textContent += " - " + count;
    count = 0;
    countEl.textContent = 0;
}