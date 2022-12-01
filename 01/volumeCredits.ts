import { playFor } from './playFor.ts';
import { PlayPerformance } from './types.ts';

export function volumeCredits(perf: PlayPerformance) {
  let volumeCredits = 0;
  // add volume credits
  volumeCredits += Math.max(perf.audience - 30, 0);
  // add extra credit for every ten comedy attendees
  if ('comedy' === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);
  return volumeCredits;
}
