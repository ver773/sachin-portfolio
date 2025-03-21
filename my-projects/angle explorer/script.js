const inp = document.querySelector(".input");
const rel = document.querySelector(".result");
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  const inputvalue = inp.value;
  console.log(inputvalue);
  if (inputvalue == "") {
    alert("Please fill input field");
  } else if (inputvalue == 0) {
    rel.innerText = "Zero Angle ";
  } else if (inputvalue > 0 && inputvalue < 90) {
    rel.innerText = "Acute Angle";
  } else if (inputvalue == 90) {
    rel.innerText = "Right angle ";
  } else if (inputvalue > 90 && inputvalue < 180) {
    rel.innerText = "Obtus Angle";
  } else if (inputvalue == 180) {
    rel.innerText = "Straight Angle";
  } else if (inputvalue > 180 && inputvalue < 360) {
    rel.innerText = "Reflex Angle";
  } else if (inputvalue == 360) {
    rel.innerText = "Complete Angle";
  } else {
    alert("Please fill valid Angle");
  }
});
