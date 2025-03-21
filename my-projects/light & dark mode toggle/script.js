let btn = document.querySelector(".button1");
let body = document.querySelector("body");

let mode = "light";

btn.addEventListener("click", () => {
  if (mode == "light") {
    body.style.backgroundColor = "black";
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    mode = "dark";
  } else {
    body.style.backgroundColor = "white";
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    mode = "light";
  }
});
