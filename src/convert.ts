import type { Currency } from "./types";
import { rates } from "./data/rates";

export default function convert(
  amount: number,
  from: Currency,
  to: Currency
): number {
  const currentRate = rates[from][to];

  const convertedAmount = amount * currentRate;

  return + convertedAmount.toFixed(2);
}