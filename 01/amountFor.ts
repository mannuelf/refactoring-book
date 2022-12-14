import { PerformanceCalculator } from './PerformanceCalculator.ts';
import { playFor } from './playFor.ts';
import type { PlayPerformance } from './types.ts';

export function amountFor(aPerformance: PlayPerformance): number {
  return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
}
