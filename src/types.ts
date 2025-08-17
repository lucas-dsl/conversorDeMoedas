export type Currency = "USD" | "EUR" | "BRL" | "GBP";

export interface Rates {
  [key: string]: number;
}

export type RatesTable = {
  [from in Currency]: Rates;
};
