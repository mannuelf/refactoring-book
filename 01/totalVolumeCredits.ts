import invoice from './data/invoice.ts';
import { volumeCreditsFor } from './volumeCreditsFor.ts';

export function totalVolumeCredits() {
  let volumeCredits = 0;
  for (const perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
  return volumeCredits;
}
