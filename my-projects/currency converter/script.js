const x = document.querySelector(".inputr");
const y = document.querySelector(".inputa");
const btn = document.querySelector(".button");
const rel = document.querySelector(".result");
const currencyname = document.querySelector(".inputc");

btn.addEventListener("click", () => {
  let price = x.value;
  let totalcurrency = y.value;
  let currency = currencyname.value;

  if (price == "" || totalcurrency == "" || currency == "") {
    alert("Please fill input field");
  } else if (currency == "Doller") {
    price = 80;
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
    x.value = "";
  } else if (currency == "Euro") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Ruble") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "yen") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Dinar") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Pound") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Taka") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Ngultrum") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Rial") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Rand") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Dong") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else if (currency == "Baht") {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  } else {
    let count = price * totalcurrency;
    rel.innerText = `${totalcurrency} ${currency} in indian rupees =>  ${count} `;
  }
});
