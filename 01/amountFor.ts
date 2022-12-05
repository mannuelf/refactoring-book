import type { Play, PlayPerformance } from './types.ts';

export function amountFor(aPerformance: PlayPerformance): number {
  let result = 0;

  switch (aPerformance.play.type) {
    case 'tragedy':
      result = 40000;

      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }

      break;

    case 'comedy':
      result = 30000;

      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }

      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown type: ${aPerformance.play.type}`);
  }
  return result;
}
