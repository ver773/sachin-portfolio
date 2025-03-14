let btn = document.querySelector(".button1");
let body = document.querySelector("body");

let mode = "light";

function switchbackground() {
  if (mode == "light") {
    body.style.backgroundColor = "black";
    body.style.color = "black";
    mode = "dark";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    mode = "light";
  }
}

btn.addEventListener("click", switchbackground);
