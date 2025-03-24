let btn = document.querySelector(".button");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  colorcode = Math.floor(Math.random() * 114123)
    .toString(16)
    .padStart(6, "0");
  let color = `#${colorcode}`;
  body.style.backgroundColor = color;
  colorcode += 20;
});
