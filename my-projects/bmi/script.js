let weight = document.querySelector(".input1");
let height = document.querySelector(".input2");
let btn = document.querySelector(".button");
let rel = document.querySelector(".result");
let btn2 = document.querySelector(".button2");

function calculate() {
  x = weight.value;
  y = height.value;

  let z = x / ((y * y) / 10000);
  z = z.toFixed(1);
  console.log(z);

  if (x == "" || y == "") {
    alert("Please Enter Height and Weight");
  } else if (z <= 18.4) {
    rel.innerText = z + " You are under weight";
    console.log(" You are under weight");
  } else if (z >= 18.5 && z <= 24.9) {
    rel.innerText = z + " Your weight is Normal";
    console.log(" Your weight is Normal");
  } else if (z >= 25.0 && z <= 39.9) {
    rel.innerText =
      z + " Please loose your weight because you are in overweight";
    console.log("Please loose your weight because you are in overweight");
  } else if (z >= 40.0) {
    rel.innerText = z + " Your weight is too high because you are in Obese";
    console.log(" Your weight is too high because you are in Obese");
  }
}
btn.addEventListener("click", calculate);
function clear() {
  weight.value = "";
  height.value = "";
  rel.innerText = "";
}
btn2.addEventListener("click", clear);
