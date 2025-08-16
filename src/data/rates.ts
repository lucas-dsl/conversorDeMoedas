import type { Currency, Rates } from "../types";

export const rates: Record<Currency, Rates> = {
  USD: { USD: 1, EUR: 0.92, BRL: 5.42, GBP: 0.78 },
  EUR: { USD: 1.09, EUR: 1, BRL: 5.87, GBP: 0.85 },
  BRL: { USD: 0.18, EUR: 0.17, BRL: 1, GBP: 0.15 },
  GBP: { USD: 1.28, EUR: 1.18, BRL: 6.9, GBP: 1 },
};