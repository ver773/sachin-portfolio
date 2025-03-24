let inp1 = document.querySelector(".input1");
let inp2 = document.querySelector(".input2");
let btna = document.querySelector(".buttonadd");
let btns = document.querySelector(".buttonsub");
let btnm = document.querySelector(".buttonmul");
let btnd = document.querySelector(".buttondiv");
let rel = document.querySelector(".result");

btna.addEventListener("click", () => {
  let input1value = Number(inp1.value);
  let input2value = Number(inp2.value);
  let add = input1value + input2value;
  console.log(add);
  rel.innerText = `Addition = ${add}`;
});
btns.addEventListener("click", () => {
  let input1value = Number(inp1.value);
  let input2value = Number(inp2.value);
  let add = input1value - input2value;
  console.log(add);
  rel.innerText = `Addition = ${add}`;
});
btnm.addEventListener("click", () => {
  let input1value = Number(inp1.value);
  let input2value = Number(inp2.value);
  let add = input1value * input2value;
  console.log(add);
  rel.innerText = `Addition = ${add}`;
});
btnd.addEventListener("click", () => {
  let input1value = Number(inp1.value);
  let input2value = Number(inp2.value);
  let add = input1value / input2value;
  console.log(add);
  rel.innerText = `Addition = ${add}`;
});
