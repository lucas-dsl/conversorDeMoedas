export type Currency = "USD" | "EUR" | "BRL" | "GBP";

export interface Rates {
  [key: string]: number;
}