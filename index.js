
// count element here

let countBtn = document.getElementById("countBtn");

// Count var is working if we invoke it

let count = 0;

// Increment function

function increment() {
  count = count + 1;
  countBtn.textContent = count;
}

// Decrement function

function decrement() {
  count -= 1;
  countBtn.textContent = count;
}

// Reset function

function reset() {
  count = 0;
  countBtn.textContent = count;
}

// Save function

let saveBtn = document.getElementById("save-btn");
let entries = document.getElementById("entries");

function save() {
  let counterStr = count + ", ";
  entries.textContent += counterStr;
}