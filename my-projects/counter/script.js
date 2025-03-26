let btn = document.querySelector(".button1");
let rel = document.querySelector(".result");
let x = 1;
function count() {
  rel.innerText = `${x}`;
  x++;
}
btn.addEventListener("click", count);
