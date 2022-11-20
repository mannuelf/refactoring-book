import type { Play, PlayPerformance } from './types.ts';

export function amountFor(perf: PlayPerformance, play: Play) {
  let result = 0;

  switch (play.type) {
    case 'tragedy':
      result = 40000;

      if (perf.audience > 30) {
        result += 1000 * (perf.audience - 30);
      }

      break;

    case 'comedy':
      result = 30000;

      if (perf.audience > 20) {
        result += 10000 + 500 * (perf.audience - 20);
      }

      result += 300 * perf.audience;
      break;
    default:
      throw new Error(`unknown type: ${play.type}`);
  }
  return result;
}
