import { playFor } from './playFor.ts';
import { PlayPerformance } from './types.ts';

export function volumeCredits(perf: PlayPerformance) {
  let result = 0;
  // add volume credits
  result += Math.max(perf.audience - 30, 0);
  // add extra credit for every ten comedy attendees
  if ('comedy' === playFor(perf).type) result += Math.floor(perf.audience / 5);
  return result;
}
