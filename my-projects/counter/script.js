let btn = document.querySelector(".button1");
let rel = document.querySelector(".result");
let x;
function count() {
  x++;
  console.log(x);
}
btn.addEventListener("click", count);
