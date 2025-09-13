
// count element here

let countBtn = document.getElementById("countBtn");

// Count var is working if we invoke it

let count = 0;

function increment() {
  count = count + 1;
  countBtn.textContent = count;
}
