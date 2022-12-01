import { playFor } from './playFor.ts';
import { PlayPerformance } from './types.ts';

export function volumeCredits(aPerformance: PlayPerformance) {
  let result = 0;
  // add volume credits
  result += Math.max(aPerformance.audience - 30, 0);
  // add extra credit for every ten comedy attendees
  if ('comedy' === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
  return result;
}
