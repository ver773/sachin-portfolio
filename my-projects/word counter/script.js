let body = document.querySelector("body");
let inp = document.querySelector(".maininput");
let btn = document.querySelector(".mainbutton");
let rel = document.querySelector(".result");

btn.addEventListener("click", () => {
  let fullvalue = inp.value;
  let len = fullvalue.length;
  if (fullvalue == "") {
    body.style.backgroundColor = "gold";
    alert("don't leave blank inputfield");
  } else if (fullvalue / 1) {
    alert("don't fill only number");
  } else if (fullvalue == "sachin") {
    body.style.backgroundColor = "green";
    rel.innerText = `${fullvalue} have ${len} letters`;
  } else if (fullvalue == "nizam sir") {
    body.style.backgroundColor = "orange";
    rel.innerText = `${fullvalue} have ${len} letters`;
  } else {
    body.style.backgroundColor = "gray";
    maindiv.style.backgroundColor = "white";
    rel.innerText = `${fullvalue} have ${len} letters`;
  }
});
