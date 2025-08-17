import "./style.css";
import { fetchRates } from "./data/fetchRates";
import type { RatesTable } from "./types";
import type { Currency } from "./types";
import convert from "./convert";

const fromSelect = document.getElementById("from") as HTMLSelectElement;
const toSelect = document.getElementById("to") as HTMLSelectElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const convertBtn = document.getElementById("convert") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;
let rates: RatesTable;


function populateSelect(select: HTMLSelectElement) {
  Object.keys(rates).forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;
    select.appendChild(option);
  });
}

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value as Currency;
  const to = toSelect.value as Currency;

  if (isNaN(amount) || amount <= 0) {
    result.textContent = "Por favor, insira um valor válido";
    return;
  }

  const converted = convert(amount, from, to, rates);
  result.textContent = `${amount} ${from} = ${converted} ${to}`;
});


async function init() {
  rates = await fetchRates();
  populateSelect(fromSelect);
  populateSelect(toSelect);
  fromSelect.value = "USD";
  toSelect.value = "BRL";
}

init();


populateSelect(fromSelect);
populateSelect(toSelect);
fromSelect.value = "USD";
toSelect.value = "BRL";