const x = document.querySelector(".inputr");
const y = document.querySelector(".inputa");
const btn = document.querySelector(".button");
const rel = document.querySelector(".result");
const country = document.querySelector(".inputc");
btn.addEventListener("click", () => {
  let u = x.value;
  let g = y.value;
  let cu = country.value;
if (cu == ){

}
  let count = u * g;
  rel.innerText = ` ${cu} ${count} `;
  console.log(count);
});
