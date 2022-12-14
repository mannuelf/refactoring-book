import { Play, PlayPerformance } from './types.ts';

export class PerformanceCalculator {
  performance: PlayPerformance;
  play: Play;

  constructor(aPerformance: PlayPerformance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount(): number {
    throw new Error('subclass responsibility');
  }

  get volumeCredits(): number {
    let result = 0;
    result += Math.max(this.performance.audience - 30, 0);
    if ('comedy' === this.play.type) result += Math.floor(this.performance.audience / 5);
    return result;
  }
}
