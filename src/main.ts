import "./style.css";
import { rates } from "./data/rates";

const fromSelect = document.getElementById("from") as HTMLSelectElement;
const toSelect = document.getElementById("to") as HTMLSelectElement;

function populateSelect(select: HTMLSelectElement) {
  Object.keys(rates).forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;
    select.appendChild(option);
  });
}

populateSelect(fromSelect);
populateSelect(toSelect);
fromSelect.value = "USD";
toSelect.value = "BRL";