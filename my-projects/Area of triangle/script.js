let inp1m1 = document.querySelector(".input1m-1");
let inp2m1 = document.querySelector(".input2m-1");
let inp1m2 = document.querySelector(".input1m-2");
let inp2m2 = document.querySelector(".input2m-2");
let inp3m2 = document.querySelector(".input3m-2");
let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let rel1 = document.querySelector(".result1");
let rel2 = document.querySelector(".result2");
let rel3 = document.querySelector(".result3");

function area1() {
  const x = parseFloat(inp1m1.value);
  let y = parseFloat(inp2m1.value);

  console.log(x);
  console.log(y);
  let z = (1 / 2) * x * y;

  rel1.innerText = `Height = ${x} , Base = ${y} , Area = ${z}`;
  console.log(z);
}

btn1.addEventListener("click", area1);

function area2() {
  let x = parseFloat(inp1m2.value);
  let y = parseFloat(inp2m2.value);
  let z = parseFloat(inp3m2.value);
  console.log(x);
  console.log(y);
  console.log(z);

  let w = x + y + z;
  console.log("sum is", w);
  w = w / 2;
  console.log(w);
  let k = w * (w - x) * (w - y) * (w - z);

  console.log(x);
  console.log(y);
  console.log(z);
  let q = Math.sqrt(k);
  console.log(q);
  rel2.innerText = ` Area = ${q}`;
}
btn2.addEventListener("click", area2);
