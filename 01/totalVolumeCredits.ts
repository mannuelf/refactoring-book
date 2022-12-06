import type { Invoice } from './types.ts';

export function totalVolumeCredits(invoice: Invoice): number {
  let volumeCredits = 0;
  for (const perf of invoice.performances) {
    volumeCredits += perf.volumeCredits;
  }
  return volumeCredits;
}
