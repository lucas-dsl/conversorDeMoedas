import type { Currency, RatesTable } from "./types";

export default function convert(
  amount: number,
  from: Currency,
  to: Currency,
  rates: RatesTable
): number {
  const currentRate = rates[from][to];
  return + (amount * currentRate).toFixed(2);
}
