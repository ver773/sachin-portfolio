let inp1 = document.querySelector(".input1");
let inp2 = document.querySelector(".input2");
let inp3 = document.querySelector(".input3");
let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let rel1 = document.querySelector(".result1");
let rel2 = document.querySelector(".result2");
let rel3 = document.querySelector(".result3");

function area1() {
  let x = inp1.value;
  let y = inp2.value;

  console.log(x);
  console.log(y);
  let z = (1 / 2) * x * y;

  rel.innerText = `Height = ${x} , Base = ${y} , Area = ${z}`;
  console.log(z);
}

btn1.addEventListener("click", area1);

function area2() {
  let x = inp1.value;
  let y = inp2.value;
  let z = inp3.value;

  let w = (x + y + z) / 2;

  let Q = Math.sqrt("")
}
btn2.addEventListener("click", area2);
