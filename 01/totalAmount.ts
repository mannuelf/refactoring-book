import type { IInvoice } from './types.ts';

export default function totalAmount(data: IInvoice): number {
  let result = 0;
  for (const perf of data.performances) {
    result += perf.amount;
  }
  return result;
}
