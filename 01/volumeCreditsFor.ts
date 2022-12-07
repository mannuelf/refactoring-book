import { playFor } from './playFor.ts';
import type { PlayPerformance } from './types.ts';

export function volumeCreditsFor(aPerformance: PlayPerformance): number {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ('comedy' === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
  return result;
}
