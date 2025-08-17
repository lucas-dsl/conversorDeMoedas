import type { Currency, RatesTable } from "../types";

const currencies: Currency[] = ["USD", "EUR", "BRL", "GBP"];

export async function fetchRates(): Promise<RatesTable> {
  const baseCurrency = "USD";
  const toCurrencies = currencies.filter((c) => c !== baseCurrency).join(",");

  const res = await fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}&to=${toCurrencies}`);
  const data = await res.json();

  const ratesTable: RatesTable = {
    [baseCurrency]: {
      [baseCurrency]: 1,
      ...data.rates,
    },
  } as RatesTable;

  const promises = currencies
    .filter((c) => c !== baseCurrency)
    .map(async (from) => {
      const others = currencies.filter((c) => c !== from).join(",");
      const res = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=${others}`);
      const data = await res.json();

      ratesTable[from] = {
        [from]: 1,
        ...data.rates,
      };
    });

  await Promise.all(promises);

  return ratesTable;
}
