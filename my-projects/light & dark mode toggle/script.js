let btn = document.querySelector(".button1");
let body = document.querySelector("body");

let mode = "light";

function switchbackground() {
  if (mode == "light") {
    body.style.backgroundColor = "black";
    btn.style.color = "white";
    mode = "dark";
  } else {
    body.style.backgroundColor = "white";
    btn.style.color = "black";
    mode = "light";
  }
}

btn.addEventListener("click", switchbackground);
