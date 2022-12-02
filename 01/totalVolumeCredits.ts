import { Invoice } from './types.ts';
import { volumeCreditsFor } from './volumeCreditsFor.ts';

export function totalVolumeCredits(invoice: Invoice) {
  let volumeCredits = 0;
  for (const perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
  return volumeCredits;
}
