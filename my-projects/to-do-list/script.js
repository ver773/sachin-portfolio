let input = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let inp = input.value;
  console.log(inp);
  let add = document.createElement("p");
  add.innerText = inp;
  document.div.appendChild(add);

  del.addEventListener("click", () => {});
});
let del = document.createElement("button");
del.innerText = "Delete";
