import type { IInvoice } from './types.ts';

export function totalVolumeCredits(invoice: IInvoice): number {
  let volumeCredits = 0;
  for (const perf of invoice.performances) {
    volumeCredits += perf.volumeCredits;
  }
  return volumeCredits;
}
