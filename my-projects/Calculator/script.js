let inp1 = document.querySelector(".input1");
let inp2 = document.querySelector(".input2");
let btna = document.querySelector(".buttonadd");
let btns = document.querySelector(".buttonsub");
let btnm = document.querySelector(".buttonmul");
let btnd = document.querySelector(".buttondiv");
let delbtn = document.querySelector(".buttondel");
let rel = document.querySelector(".result");

btna.addEventListener("click", () => {
  let input1value = Number(inp1.value);
  let input2value = Number(inp2.value);
  if (input1value == "" || input2value == "") {
    alert("Please enter value in input field");
  } else if (input1value >= 0 || input2value >= 0) {
    let add = input1value + input2value;
    console.log(add);
    rel.innerText = `Addition = ${add}`;
  }
});
btns.addEventListener("click", () => {
  let input1value = Number(inp1.value);
  let input2value = Number(inp2.value);
  if (input1value == "" || input2value == "") {
    alert("Please enter value in input field");
  } else if (input1value >= 0 || input2value >= 0) {
    let add = input1value - input2value;
    console.log(add);
    rel.innerText = `Subtraction = ${add}`;
  }
});
btnm.addEventListener("click", () => {
  let input1value = Number(inp1.value);
  let input2value = Number(inp2.value);
  if (input1value == "" || input2value == "") {
    alert("Please enter value in input field");
  } else if (input1value >= 0 || input2value >= 0) {
    let add = input1value * input2value;
    console.log(add);
    rel.innerText = `Multiplication = ${add}`;
  }
});
btnd.addEventListener("click", () => {
  let input1value = Number(inp1.value);
  let input2value = Number(inp2.value);
  if (input1value == "" || input2value == "") {
    alert("Please enter value in input field");
  } else if (input1value >= 0 || input2value >= 0) {
    let add = input1value / input2value;
    console.log(add);
    rel.innerText = `Division = ${add}`;
  }
});
delbtn.addEventListener("click", () => {
  inp1.value = "";
  inp2.value = "";
  rel.innerText = "";
});
