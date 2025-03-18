let inp1m1 = document.querySelector(".input1m-1");
let inp2m1 = document.querySelector(".input2m-1");
let inp1m2 = document.querySelector(".input1m-2");
let inp2m2 = document.querySelector(".input2m-2");
let inp3m2 = document.querySelector(".input3m-2");
let inp1m3 = document.querySelector(".input1m-3");
let inp2m3 = document.querySelector(".input2m-3");
let inp3m3 = document.querySelector(".input3m-3");
let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let rel1 = document.querySelector(".result1");
let rel2 = document.querySelector(".result2");
let rel3 = document.querySelector(".result3");

function area1() {
  const x = parseFloat(inp1m1.value);
  let y = parseFloat(inp2m1.value);
  let z = (1 / 2) * x * y;

  rel1.innerText = `Height = ${x} , Base = ${y} , Area = ${z}`;
  console.log(z);
}

btn1.addEventListener("click", area1);

function area2() {
  let x = parseFloat(inp1m2.value);
  let y = parseFloat(inp2m2.value);
  let z = parseFloat(inp3m2.value);
  let w = x + y + z;
  w = w / 2;
  const k = w * (w - x) * (w - y) * (w - z);
  const q = Math.sqrt(k);
  console.log(q);
  rel2.innerText = ` Area = ${q}`;
}
btn2.addEventListener("click", area2);

function area3() {
  const x = inp1m3.value;
  const y = inp2m3.value;
  const z = inp3m3.value;

  if (x == "" || y == "" || z == "") {
    alert("Please fill value");
  } else if (z < 0 && z > 180) {
    alert("Enter a valid angle ( angle > 0 , angle < 180)");
  } else if (z == 0) {
    const area = (1 / 2) * x * y * 0;
    console.log(area);
    rel3.innerText = `Area = ${area}`;
  } else if (z == 30) {
    const area = (1 / 2) * x * y * (1 / 2);
    console.log(area);
    rel3.innerText = `Area = ${area}`;
  } else if (z == 45) {
    const area = (1 / 2) * x * y * (1 / 1.4);
    console.log(area);
    rel3.innerText = `Area = ${area}`;
  } else if (z == 60) {
    const area = (1 / 2) * x * y * (1.7 / 2);
    console.log(area);
    rel3.innerText = `Area = ${area}`;
  } else if (z == 90) {
    const area = (1 / 2) * x * y * 1;
    console.log(area);
    rel3.innerText = `Area = ${area}`;
  } else {
    alert("Enter valid angle");
  }
}
btn3.addEventListener("click", area3);
