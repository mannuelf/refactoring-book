import { plays } from './data/plays.ts';
import type { PlayPerformance } from './types.ts';

export function playFor(aPerformance: PlayPerformance) {
  return plays[aPerformance.playID];
}
